from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
 

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
    # user_id = db.Column(db.Integer, db.ForeignKey("UserAnnounceRelation.user_id") , nullable=True, unique=True, )

    def __repr__(self):
        return f'<Announce {self.mail}>'

    def serialize(self):
        return {
            "mail": self.mail,
            "profession": self.profession,
            "price": self.price,
            "zipcode": self.zipcode,
            "description": self.description,
            # do not serialize the password, its a security breach
        }