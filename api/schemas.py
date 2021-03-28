from api import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ("id", "first_name", "last_name", "email", "password")
        
class PlanetSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "type", "home_star", "mass", "radius", "distance")