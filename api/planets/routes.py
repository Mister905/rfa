from api.planets import bp
from flask import request, jsonify
from api.models import Planet
from api.schemas import PlanetSchema
from flask_jwt_extended import jwt_required
from api import db

planet_schema = PlanetSchema()
planets_schema = PlanetSchema(many=True)

@bp.route("/api/planets", methods=["GET"])
def planets():
    planets_list = Planet.query.all()
    result = planets_schema.dump(planets_list)
    return jsonify(result)
  
@bp.route('/api/planets/<int:id>', methods=['GET'])
def get_planet(id: int):
    planet = Planet.query.filter_by(id=id).first()
    if planet:
        result = planet_schema.dump(planet)
        return jsonify(result)
    else:
        return jsonify(message="Planet not found."), 404
    
@bp.route('/api/planets', methods=['POST'])
@jwt_required()
def create_planet():
    name = request.json['name']
    test = Planet.query.filter_by(name=name).first()
    if test:
        return jsonify("There is already a planet by that name"), 409
    else:
        # return jsonify(message="DERP"), 200
        type = request.json['type']
        home_star = request.json['home_star']
        mass = float(request.json['mass'])
        radius = float(request.json['radius'])
        distance = float(request.json['distance'])

        new_planet = Planet(name=name,
                            type=type,
                            home_star=home_star,
                            mass=mass,
                            radius=radius,
                            distance=distance)

        db.session.add(new_planet)
        db.session.commit()
        return jsonify(message="You created a planet"), 201
    
    
@bp.route('/api/planets', methods=['PUT'])
@jwt_required()
def update_planet():
    id = int(request.json['id'])
    planet = Planet.query.filter_by(id=id).first()
    if planet:
        planet.name = request.json['name']
        planet.type = request.json['type']
        planet.home_star = request.json['home_star']
        planet.mass = float(request.json['mass'])
        planet.radius = float(request.json['radius'])
        planet.distance = float(request.json['distance'])
        db.session.commit()
        return jsonify(message="Planet successfully updated"), 202
    else:
        return jsonify(message="Planet update failed"), 404
    
    
@bp.route('/api/planets/<int:id>', methods=['DELETE'])
@jwt_required()
def remove_planet(id: int):
    planet = Planet.query.filter_by(id=id).first()
    if planet:
        db.session.delete(planet)
        db.session.commit()
        return jsonify(message="You deleted a planet"), 202
    else:
        return jsonify(message="That planet does not exist"), 404