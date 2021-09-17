from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine, engine
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('postgresql://postgres:Asdf1998@localhost/sensor',
     echo=True
)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)


Base = declarative_base()
