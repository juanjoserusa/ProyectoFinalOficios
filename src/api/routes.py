from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Announce, Message
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash, generate_password_hash


api = Blueprint('api', __name__)



@api.route("/signup", methods=["POST"])
def signUp():
    body = request.get_json()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    access_token = create_access_token(identity=email)
    signup = User(email=body["email"], password=body["password"])
    db.session.add(signup)
    db.session.commit()
    
    return jsonify({"mensaje": "User registered succesfully", "token": access_token}),200


@api.route("/sessionlogin", methods=["GET"])
@jwt_required()
def get_hello():
    dictionary= {
        "message": "Has iniciado sesion con éxito"
    }
    return jsonify(dictionary)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)



@api.route('/publicarAnuncio', methods=['POST'])
def publicar_anuncio():
    body = request.get_json()
    anuncio = Announce( mail=body['nombre'], profession=body['profesion'], description=body['anuncio'], price=body['precio'], zipcode=body['codigoPostal'])
    db.session.add(anuncio)
    db.session.commit()
    return jsonify({"mensaje": "Check!"}),200

@api.route('/anuncios', methods=['GET'])
def anuncios():
    all_anuncio = Announce.query.all()
    all_anuncio = list(map(lambda x: x.serialize(), all_anuncio))
    return jsonify(all_anuncio)


@api.route('/enviarMensaje', methods=['POST'])
def enviar_mensaje():
    body = request.get_json()
    mensaje = Message( mail=body['nombre'], profession=body['profesion'], message=body['mensaje'])
    db.session.add(mensaje)
    db.session.commit()
    return jsonify({"mensaje": "Check!"}),200