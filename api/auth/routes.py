from api.auth import bp
from flask import request, jsonify
from api.models import User
from api import db
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager


@bp.route("/api/auth/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    user = User.query.filter_by(email=email).first()
    if user is None or not user.check_password(password):
        return jsonify(error=True, message="Unable to login")
    else:
        token = create_access_token(identity=email)
        return jsonify(token=token)     
    

@bp.route("/api/auth/register", methods=["POST"])
def register():
    email = request.json["email"]
    is_preexisting_account = User.query.filter_by(email=email).first()
    if is_preexisting_account:
        return jsonify(error=True, message="An account with that email already exists")
    elif request.json["password"] != request.json["confirm_password"]:
        return jsonify(error=True, message="Passwords must match")
    else:
        first_name = request.json["first_name"]
        last_name = request.json["last_name"]
        password = request.json["password"]
        user = User(first_name=first_name, last_name=last_name, email=email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return jsonify(success=True, message="User successfully created"), 201

