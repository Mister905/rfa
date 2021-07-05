# """ 
# The api package is defined by the api directory and the __init__.py script, and is referenced in the from api import routes statement. The app variable is defined as an instance of class Flask in the __init__.py script, which makes it a member of the api package. 
# """

from flask import Flask
from flask_jwt_extended.jwt_manager import JWTManager
from api.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()
jwt = JWTManager()

def create_app():
    
    app = Flask(__name__)
    
    app.config.from_object(Config)
    
    db.init_app(app)
    
    ma.init_app(app)
    
    jwt.init_app(app)
    
    from api.models import User, Planet, Post
    
    migrate = Migrate(app, db)
     
    from api.auth import bp as auth_bp
    app.register_blueprint(auth_bp)
    
    from api.planets import bp as planets_bp
    app.register_blueprint(planets_bp)
    
    @app.cli.command("db_create")
    def db_create():
        db.create_all()
        print("Database Created!")
        
    @app.cli.command("db_seed")
    def db_seed():
        mercury = Planet(name = "Mercury", 
                        type = "Class D",
                        home_star = "Sol",
                        mass = 3.258e23,
                        radius = 1516,
                        distance = 35.98e6)
        venus = Planet(name = "Venus", 
                        type = "Class K",
                        home_star = "Sol",
                        mass = 4.867e24,
                        radius = 3760,
                        distance = 67.24e6)
        earth = Planet(name = "Earth", 
                        type = "Class M",
                        home_star = "Sol",
                        mass = 5.972e2,
                        radius = 3959,
                        distance = 92.96e6)
        db.session.add(mercury)
        db.session.add(venus)
        db.session.add(earth)
        
        test_user = User(first_name = "John",
                        last_name = "Doe",
                        email = "jdoe@gmail.com",
                        username = "jdoe",
                        password_hash = "password123")
        db.session.add(test_user)
        
        db.session.commit()
        print("Database Seeded!")

    @app.cli.command("db_drop")
    def db_drop():
        db.drop_all()
        print("Database dropped!")
    
    return app
