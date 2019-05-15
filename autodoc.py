import json
from apispec import APISpec
from apispec_webframeworks.flask import FlaskPlugin
from blueprint.api.views import ping, novo
from blueprint import app


spec = APISpec(
    title="API Weee.tel",
    version="1.0.0",
    openapi_version="3.0.2",
    info=dict(description="API da Weee.tel para comunicação dos Arduinos com o servidor."),
    plugins=[FlaskPlugin()],
)

with app.test_request_context():
    spec.path(view=ping)
    spec.path(view=novo)

with open('blueprint\static\js\swagger.json', 'w') as f:
    json.dump(spec.to_dict(), f)