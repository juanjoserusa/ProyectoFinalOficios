from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)  
    user_type = db.Column(db.Boolean, default=False)
   
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
    subject = db.Column(db.String(100), unique=False, nullable=False)
    message = db.Column(db.String(500), unique=False, nullable=False)
    sender = db.Column(db.String(100), nullable=False)
    to = db.Column(db.Integer, db.ForeignKey("user.id") , nullable=False)
    rel_user = db.relationship(User)

    def __repr__(self):
        return f'<Message {self.id}>'

    def serialize(self):
        return {
            
            "subject": self.subject,
            "message": self.message,
            "sender": self.sender
            # do not serialize the password, its a security breach
        }

class Todo_list(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mail_cliente = db.Column(db.String(100), unique=False, nullable=False)
    descripcion = db.Column(db.String(500), unique=False, nullable=False)
    precio = db.Column(db.Integer,unique=False, nullable=False)
    horas = db.Column(db.Integer, unique=False, nullable=False)
    dia = db.Column(db.Integer, unique=False, nullable=False)
    mes = db.Column(db.Integer, unique=False, nullable=False)
    año = db.Column(db.Integer, unique=False, nullable=False)
    id_profesional = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    rel_user = db.relationship(User)

    def __repr__(self):
        return f'<Todolist {self.id}>'

    def serialize(self):
        return {
            
            "mail_cliente": self.mail_cliente,
            "descripcion": self.descripcion,
            "precio": self.precio,
            "horas": self.horas,
            "dia": self.dia,
            "mes": self.mes,
            "año": self.año,
            "id_profesional": self.id_profesional
            # do not serialize the password, its a security breach
        }