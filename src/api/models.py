from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from itsdangerous import Serializer


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)  
    user_type = db.Column(db.Boolean, default=False)
    date_created = db.Column(db.DateTime,defaul=datetime.utcnow)

    def get_token(self,expires_sec=300 ):
        serial=Serializer(app.config[JWT_SECRET_KEY],expires_in=expires_sec)
        return serial.dumps({'user_id':self.id}).decode('utf-8')
    
    @staticmethod
    def verify_token(token):
        serial=Serializer(app.config[JWT_SECRET_KEY])
        try:   
            user_id=serial.load(token)['user_id']
        except:
            return None    
        return User.query.get(user_id)    


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }



class Announce(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mail = db.Column(db.String(50), unique=False, nullable=False)
    profession = db.Column(db.String(20), unique=False, nullable=False)
    price= db.Column(db.Integer, unique=False, nullable=False)
    zipcode = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id") , nullable=True)
    user = db.relationship('User', backref= 'announce')
   

    def __repr__(self):
        return f'<Announce {self.mail}>'

    def serialize(self):
        return {
            "mail": self.mail,
            "profession": self.profession,
            "price": self.price,
            "zipcode": self.zipcode,
            "description": self.description,
            "user_id" : self.user_id
            # do not serialize the password, its a security breach
        }


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mail = db.Column(db.String(100), unique=False, nullable=False)
    subject = db.Column(db.String(100), unique=False, nullable=False)
    message = db.Column(db.String(500), unique=False, nullable=False)
    userEnvio = db.Column(db.Integer, db.ForeignKey("user.id") , nullable=True)
    userRecibe = db.Column(db.Integer, db.ForeignKey("user.id") , nullable=True)
   

    def __repr__(self):
        return f'<Message {self.mail}>'

    def serialize(self):
        return {
            "mail": self.mail,
            "subject": self.subject,
            "message": self.message,
            # do not serialize the password, its a security breach
        }