from api.auth import bp
from flask import request, jsonify
from api.models import User


# @bp.route("/api/auth/login", methods=["POST"])
# def login():
    # return request.json
    
    
@bp.route("/api/auth/register", methods=["POST"])
def register():
    
    email = request.json['email']
    is_preexisting_email = User.query.filter_by(email=email).first()
    if is_preexisting_email:
        return jsonify(message="An account with that email already exists")
    else:
        first_name = request.json['first_name']
        last_name = request.json['last_name']
        password = request.json['password']
        user = User(first_name=first_name, last_name=last_name, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return jsonify(message="User successfully created"), 201

