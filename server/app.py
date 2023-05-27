import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

api = Flask(__name__)

api.config["JWT_SECRET_KEY"] = "swiftsync_integration"
jwt = JWTManager(api)

@api.route('/createToken', methods=["POST"])
def create_token():
    """
    Creates and return an access token if the provided credentials are valid.
    """
    # Get credentials from request
    email_address = request.json.get("emailAddress", None)
    password = request.json.get("password", None)

    # Check credentails with DB
    # TODO: Needs to be replaced with actual DB
    if email_address != "test@test.com" or password != "qwer1234":
        return {"msg": "Wrong email address or password."}, 401
    else:
        access_token = create_access_token(identity=email_address)
        response = {"access_token": access_token}
        return response

@api.after_request
def refresh_expiring_jwts(response):
    """
    Refreshes access token at the end of its lifespan.
    """
    try:
        expiary_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))

        if target_timestamp > expiary_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()

            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)

        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

@api.route("/signout", methods=["POST"])
def sign_out():
    """
    Deletes cookies including access token to sign out.
    """
    response = jsonify({"msg": "Signed out."})
    unset_jwt_cookies(response)

    return response

@api.route('/testToken')
@jwt_required()
def return_test_response():
    """
    Returns a response body to verify access token.
    """
    response_body = {
        "msg": "Valid access token."
    }

    return response_body
