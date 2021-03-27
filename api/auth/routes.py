from api.auth import bp
from flask import jsonify


@bp.route("/api/auth/login", methods=["POST"])
def login():
    response = jsonify(message="Simple server is running")
    return response

