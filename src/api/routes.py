"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/SignUp', methods=['POST'])
def create_user():

  data = request.get_json()
  user =User(email=data['email'],password=data['password'],name=data['name'],
  last_name=data['last_name'],zipcode=data['zipcode'],is_active=True)
  db.session.add(user)
  db.session.commit()
  token = create_access_token(identity=user.id)
    #print(data) 
    #print(user.serialize())
  return jsonify({"mensaje": "usuario creado con exito","user":user.serialize(),"token":token}), 201


@api.route('/private', methods=['POST'])
@jwt_required() 
def handle_private():
   user_id = get_jwt_identity()
   user = User.query.get(user_id)
   return jsonify({"mensaje": "el usuario es quien dice ser","user":user.serialize()}),203

