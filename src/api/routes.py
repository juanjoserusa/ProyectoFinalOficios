from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Announce, Message
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity



api = Blueprint('api', __name__)



@api.route("/signup", methods=["POST"])
def signUp():
    body = request.get_json()
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user_type = request.json.get("type", None)
    signup = User(email=body["email"], password=body["password"], user_type=body.get("user_type", False))
    db.session.add(signup)
    db.session.commit()
    access_token = create_access_token(identity=email)
    
    return jsonify({"mensaje": "User registered succesfully", "token": access_token}),200


@api.route("/sessionlogin", methods=["GET"])
@jwt_required()
def get_hello():
    email= get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    dictionary= {
        "message": "Has iniciado sesion con éxito",
        "email" : user.email
    }
    return jsonify(dictionary)


@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)   
    user = User.query.filter_by(email=email, password=password).first()
    if user:    
        access_token = create_access_token(identity=email)
        return jsonify({'access_token':access_token, 'type':user.user_type})
    return jsonify({'mensaje': 'Datos incorrectos'}), 400



@api.route('/publicarAnuncio', methods=['POST'])
@jwt_required()
def publicar_anuncio():
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    body = request.get_json()
    anuncio = Announce( user_id=user.id, mail=body['nombre'], profession=body['profesion'], description=body['anuncio'], price=body['precio'], zipcode=body['codigoPostal'])
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
    mensaje = Message( sender=body["from"], to=body["to"], subject=body['subject'], message=body['message'])
    print(body)
    db.session.add(mensaje)
    db.session.commit()
    return jsonify({"mensaje": "Check!"}),200



@api.route('/recibirMensaje/<int:id>', methods=['GET'])
def recibirMensaje(id):
    all_mensaje = Message.query.filter_by(to=id)
    all_mensaje = list(map(lambda x: x.serialize(), all_mensaje))
    return jsonify(all_mensaje)



@api.route("/request_password", methods=[ "POST"])
def request_password():
    email = request.json.get("email", None)
    user = User.query.filter_by(email=email).first()  
    if user:
        return jsonify({"mensaje":"usuario existe"}),200
        return  jsonify({"mensaje":"usuario no existe"}),200 
        console.log(jsonify)    


@api.route('/search', methods=['POST'])
def handle_search():
    body_search=request.json.get("query")
    print(body_search)
    zipCode =  Announce.query.filter_by(zipcode=body_search)
    print(zipCode)
    search_results = list(map(lambda zipCode:zipCode.serialize(),zipCode))
    return jsonify({"result":search_results}), 200


