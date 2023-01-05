from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False) 
    city = db.Column(db.String(120), unique=False, nullable=False)  #class City /db.relationship ?
    zipcode = db.Column(db.Integer, unique=False, nullable=False)   #class zipcode /db.relationship ?
    phone =   db.Column(db.String(80), unique=True, nullable=False)
    userprofesional = db.Column(db.Boolean(), unique=False, nullable=True)
    userclient = db.Column(db.Boolean(), unique=False, nullable=True)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name" : self.name,
            "last_name" :self.last_name,
            "city"   :self.city,
            "zipcode":self.zipcode,
            "phone" : self.phone
            # do not serialize the password, its a security breach
        }

 