from database import Base
from sqlalchemy import String, Integer, Column

class Sensor(Base):
    __tablename__ = 'sensors'
    sensor_id = Column(Integer, primary_key=True, index=True)
    model = Column(String, unique=True)
    payload = Column(String)
