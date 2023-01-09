from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    zipcode = db.Column(db.Integer, unique=False, nullable=False)
    userprofesional = db.Column(db.Boolean(), unique=False, nullable=True)
    userclient = db.Column(db.Boolean(), unique=False, nullable=True)
    announce_id = db.Column(db.Integer, db.ForeignKey('UserAnnounceRelation.announce_id'), nullable=True, unique=True, )


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class UserAnnounceRelation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("Announce.id"), nullable=False, unique=True)
    announce_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False, unique=True)

    def __repr__(self):
        return f'<UserAnnounceRelation {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "announce_id": self.announce_id,
            # do not serialize the password, its a security breach
        }



class Announce(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mail = db.Column(db.String(50), unique=False, nullable=False)
    profession = db.Column(db.String(20), unique=False, nullable=False)
    price= db.Column(db.Integer, unique=False, nullable=False)
    zipcode = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("UserAnnounceRelation.user_id") , nullable=True, unique=True, )

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