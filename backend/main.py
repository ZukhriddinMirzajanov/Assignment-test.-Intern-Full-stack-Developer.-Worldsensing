from fastapi import FastAPI
from fastapi.params import Depends
from sqlalchemy.orm.session import Session
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from datetime import datetime

app = FastAPI()

models.Base.metadata.create_all(engine)

class Sensor(BaseModel):
    sensor_id:int
    model:str
    payload:str

    class Config():
        orm_mode = True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post('/sensor',status_code=201)
def create_sensor(sensor:Sensor, db: Session = Depends(get_db)):
    # Level 1
    # Supported handlers
    # 1 trim
    trimmed = sensor.payload.strip()
    
    # Level 1
    # 2 padToMultiple 
    N = 5
    padToMultiple = trimmed + "#"*N

    # level 1
    # 3 addTimestamp
    now = datetime.now()
    timestamp = str(datetime.timestamp(now))
    addedTimestamp = padToMultiple + "_" + timestamp
    
    # Level 1 
    # Supported outputs
    # File write
    f = open("file.txt", "a")
    text_tofile = trimmed + "," + padToMultiple + "," + addedTimestamp
    f.write(text_tofile)
    f.close()

    # Level 2
    #open and read the file
    f = open("file.txt", "r")
    print(f.read())
    
    # level 3
    # Adding a configuration for a new sensor model.
    new_sensor = models.Sensor(
        sensor_id = sensor.sensor_id,
        model = sensor.model,        
        payload = addedTimestamp
    )
    db.add(new_sensor)
    db.commit()
    db.refresh(new_sensor)

    return new_sensor

# Level 3 
# Retrieving all configurations for all sensor models.
@app.get('/sensors', status_code=200)
def get(db: Session = Depends(get_db)):
    sensors = db.query(models.Sensor).all()
    return sensors

# Level 3
# Getting configuration for a specific sensor model.
@app.get('/sensors/{sensor_id}', status_code=200)
def get_with_id(sensor_id:int, db: Session = Depends(get_db)):
    sensor = db.query(models.Sensor).filter(models.Sensor.sensor_id == sensor_id).first()
    return sensor


origins = [ "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)