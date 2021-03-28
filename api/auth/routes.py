from api.auth import bp
from flask import request, jsonify
from api.models import User


@bp.route("/api/auth/login", methods=["POST"])
def login():
    return request.json
    
    # user = User.query.filter_by(username=form.username.data).first()
    # response = jsonify(message="Simple server is running")
    # return response

