# """ 
# The api package is defined by the api directory and the __init__.py script, and is referenced in the from api import routes statement. The app variable is defined as an instance of class Flask in the __init__.py script, which makes it a member of the api package.

# The routes module is imported at the bottom and not at the top of the script as it is always done. The bottom import is a workaround to circular imports, a common problem with Flask applications. You are going to see that the routes module needs to import the app variable defined in this script, so putting one of the reciprocal imports at the bottom avoids the error that results from the mutual references between these two files. 
# """

from flask import Flask

def create_app():
    
    app = Flask(__name__)
    
    from api.auth import bp as auth_bp
    app.register_blueprint(auth_bp)
    
    return app
