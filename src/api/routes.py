"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Baseball, Nfl, Nba, Nhl ,Boxeo , Mma ,Nascar ,Nascar_drivers ,Golf, Golfer
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


# ------metodos  GET--------------------------------------------------------

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
