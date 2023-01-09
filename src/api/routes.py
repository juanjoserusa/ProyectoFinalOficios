from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash, generate_password_hash


api = Blueprint('api', name)


@api.route('/signup', methods=['POST'])
def create_user():

    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not (email and password):
        return jsonify({'message': 'Missing data'}), 400


    newuser = User(email=email, password =password )

    try:
        db.session.add(newuser)
        db.session.commit()
        access_token = create_access_token(identity=newuser.serialize())
        return jsonify(access_token= access_token), 201
    except Exception as err:
        print(str(err))
        return jsonify({'message': str(err)}), 500




@api.route('/login', methods=['POST'])
def login_user():

    email=request.json.get("email", None)
    password=request.json.get("password", None)
    user=User.query.filter_by(email=email).filter_by(password=password).first()
    if user:
        if password ==  user.password:
            token=create_access_token(identity=user.serialize())
            return jsonify({"token":token,"identity":user.serialize()}),200
        else:
            return jsonify({"msg":"bad password"}),401
    else:
        return jsonify({"msg":"bad user name or password"}),401


@api.route('/private', methods=['POST'])
@jwt_required() 
def handle_private():
   current_user_id = get_jwt_identity()
   user = User.query.get(current_user_id)
   return jsonify({"mensaje": "el usuario es quien dice ser","user":user.serialize()}),200