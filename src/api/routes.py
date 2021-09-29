"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Baseball, Nfl, Nba, Nhl ,Boxeo , Mma ,Nascar ,Nascar_drivers ,Race ,Golf, Golfer
from api.utils import generate_sitemap, APIException
import os
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.admin import setup_admin
from flask_jwt_extended import create_access_token

# from models import Person
# import JWT for tokenization
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from flask_jwt_extended import JWTManager


api = Blueprint("api", __name__)
Blueprint.config = {}
# generate sitemap with all your endpoints
limiter = Limiter(
    api,
    key_func=get_remote_address,
    default_limits=["2000000 per day", "100000 per hour"],
)


@api.route("/")
def sitemap():
    return generate_sitemap(api)


# -----metodos post-------------------------------------
# obtener usuario de base de datos y crea token
@api.route("/login", methods=["POST"])
def login():
    mail = request.json.get("mail", None)
    password = request.json.get("password", None)
    print(mail)
    print(password)
    user = User.query.filter_by(mail=mail, password=password).first()
    # valida si estan vacios los ingresos
    if user is None:
        return jsonify({"msg": "Bad mail or password"}), 401
    # crear token login
    access_token = create_access_token(identity=mail)
    return jsonify({"token": access_token, "username": user.name})


# crea usuario----------------------------------------
@api.route("/user", methods=["POST"])
def register_user():
    nombre = request.json.get("nombre", None)

    # valida si estan vacios los ingresos
    if nombre is None:
        return jsonify({"msg": "No nombre was provided"}), 400

    # busca usuario en BBDD
    user = User.query.filter_by(nombre=nombre).first()
    # the user was not found on the database
    if user:
        return jsonify({"msg": "User already exists"}), 401
    else:
        # crea usuario nuevo
        # crea registro nuevo en BBDD de
        user = User(nombre=nombre)
        db.session.add(user)
        db.session.commit()
        return (
            jsonify(
                {
                    "msg": "User created successfully",
                }
            ),
            200,
        )


# ------metodos  GET--------------------------------------------------------


@api.route("/user", methods=["GET"])
def users():
    if request.method == "GET":
        records = User.query.all()
        return jsonify([User.serialize(record) for record in records])  # LLAMAR A TODOS
    else:
        return jsonify({"msg": "no autorizado"})


# --------Baseball---------------------------------------------------------------


@api.route("/baseball", methods=["GET"])
#   @limiter.limit("12 per hour")
def baseball():
    if request.method == "GET":
        records = Baseball.query.all()
        return jsonify([Baseball.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})


# ---------------------------------------------------------------------------
@api.route("/nfl", methods=["GET"])
def nfl():
    if request.method == "GET":
        records = Nfl.query.all()
        return jsonify([Nfl.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})


# ---------------------------------------------------------------------------
@api.route("/nba", methods=["GET"])
def nba():
    if request.method == "GET":
        records = Nba.query.all()
        return jsonify([Nba.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})


# ---------------------------------------------------------------------------
@api.route("/nhl", methods=["GET"])
def nhl():
    if request.method == "GET":
        records = Nhl.query.all()
        return jsonify([Nhl.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})

# ---------------------------------------------------------------------------
@api.route("/boxeo", methods=["GET"])
def boxeo():
    if request.method == "GET":
        records = Boxeo.query.all()
        return jsonify([Boxeo.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})
# ---------------------------------------------------------------------------
@api.route("/mma", methods=["GET"])
def mma():
    if request.method == "GET":
        records = Mma.query.all()
        return jsonify([Mma.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})
# ---------------------------------------------------------------------------
@api.route("/nascar", methods=["GET"])
def nascar():
    if request.method == "GET":
        records = Nascar.query.all()
        return jsonify([Nascar.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})

# ---------------------------------------------------------------------------
@api.route("/nascar_drivers", methods=["GET"])
def nascar_drivers():
    if request.method == "GET":
        records = Nascar_drivers.query.all()
        return jsonify([Nascar_drivers.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})

 # ---------------------------------------------------------------------------
@api.route("/race", methods=["GET"])
def race():
    if request.method == "GET":
        records = Race.query.all()
        return jsonify([Race.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})

 # ---------------------------------------------------------------------------
@api.route("/golf", methods=["GET"])
def golf():
    if request.method == "GET":
        records = Golf.query.all()
        return jsonify([Golf.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})

 # ---------------------------------------------------------------------------
@api.route("/golfer", methods=["GET"])
def golfer():
    if request.method == "GET":
        records = Golfer.query.all()
        return jsonify([Golfer.serialize(record) for record in records])
    else:
        return jsonify({"msg": "no autorizado"})
