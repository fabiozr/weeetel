from flask import Flask
from flask_pymongo import PyMongo
from flask_login import LoginManager

app = Flask(__name__)

app.config.from_pyfile('config.py')

mongo = PyMongo(app)

login_manager = LoginManager()
login_manager.init_app(app)

from blueprint.api.views import mod
from blueprint.site.views import mod

app.register_blueprint(site.views.mod)
app.register_blueprint(api.views.mod, url_prefix='/api')
