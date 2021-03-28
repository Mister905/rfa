from flask import Blueprint

bp = Blueprint('planets', __name__)

from api.planets import routes