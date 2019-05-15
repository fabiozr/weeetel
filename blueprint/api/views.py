from blueprint import mongo
from flask import Blueprint, request, make_response
from flask_pymongo import ObjectId
from blueprint.site.classes import CPF
import datetime

mod = Blueprint('api', __name__)


@mod.route('/ping', methods=["POST"])
def ping():
    """ Detalhes do Ping
    ---
    post:
        tags:
        - Arduino
        summary: Ping periodico do Arduino
        description: > 
                        Quando acessar o /api/ping o Arduino deve fazer um POST contendo o **usuario e senhas do arduino,
                        carga atual, volume atual, latitude e longintude da PEV.** Se tudo estiver certo, esses
                        dados seram inseridos no banco de dados junto da data e horario em que o ping foi realizado.
        requestBody:
          description: Corpo do JSON que precisa ser enviado junto do POST. **lat** e **lng** são latitude e longitude respectivamente.
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  usuario:
                    type: string
                  senha:
                    type: string
                  carga:
                    type: integer
                  volume:
                    type: boolean
                  lat:
                    type: integer
                  lng:
                    type: integer
        responses:
          '200':
            description: OK. Informações enviadas para o servidor.
          '400':
            description: Bad request. O JSON enviado esta incorreto.
          '401':
            description: > 
                          Unathorized. O JSON enviado esta correto porem ou
                          você não tem permissão para enviar, ou suas credenciais estão incorretas. 
    """
    try:
        usuario = request.json["usuario"]
        senha = request.json["senha"]
        carga = request.json["carga"]
        volume = request.json["volume"]
        lat = request.json["lat"]
        lng = request.json["lng"]
    except:
        return "Bad request", 400

    confirmacao = mongo.db.pev.find_one({"usuario": usuario})

    if confirmacao is not None and confirmacao["senha"] == senha:
        mongo.db.evento.insert({
                                "usuario": usuario,
                                "carga": carga,
                                "volume": volume,
                                "lat": lat,
                                "lng": lng,
                                "carga_adicionada": "PING",
                                "cpf": "PING",
                                "data": datetime.datetime.now().isoformat(sep=" ")})

        mongo.db.pev.replace_one({"usuario": usuario}, {
                                "usuario": usuario,
                                "senha": senha,
                                "carga": carga,
                                "volume": volume,
                                "lat": lat,
                                "lng": lng,
                                "data": datetime.datetime.now().isoformat(sep=" ")})

        return "Ok", 200
    else:
        return 'Unathorized', 401


# É preciso deixar isso seguro contra remoções e afins
@mod.route("/novo", methods=["POST"])
def novo():
    """ Detalhes do novo
    ---
    post:
        tags:
        - Arduino
        summary: Adição de peso
        description: > 
                        O Arduino deve acessar o /api/novo quando alguma pessoa colocar um item na caixa. Apos acessar, o 
                        Arduino deve enviar seu usuario, sua senha, o CPF da pessoa que esta inserindo os items e a senha de 
                        sua conta **(Se não for colocado uma senha, o  Arduino deve enviar uma mensagem padrão nesses campos)**, a 
                        carga adicionada e o seu volume atual. Esses dados serão inseridos no banco de dados
        requestBody:
          description: >
                        Corpo do JSON que precisa ser enviado junto do POST. Se não for inserido um CPF, é necessario enviar no
                        campo do CPF o seguinte texto **"Sem CPF"** e o campo da senha_user deve estar vazio mas **precisa** ser enviado mesmo vazio.
          required: true
          content:
            application/json:
              schema:
                type: object
                properties:
                  usuario:
                    type: string
                  senha:
                    type: string
                  cpf:
                    type: string
                  senha_user:
                    type: string
                  volume:
                    type: boolean
                  carga_adicionada:
                    type: integer
        responses:
          '200':
            description: OK. Informações enviadas para o servidor.
          '400':
            description: Bad request. O JSON enviado esta incorreto.
          '401':
            description: > 
                          Unathorized. O JSON enviado esta correto porem ou
                          você não tem permissão para enviar, ou suas credenciais (Do Arduino) estão incorretas. 
          '404':
            description:         >
                          Not Found. CPF não encontrado. O CPF não é valido, ou não esta
                          cadastrado não foi no sistema, ou a senha do usuario esta incorreta
    """
    try:
        usuario = request.json["usuario"]
        senha = request.json["senha"]
        cpf = request.json["cpf"]
        senha_user = request.json["senha_user"]
        carga_adicionada = request.json["carga_adicionada"]
        volume = request.json["volume"]
    except:
        return "Bad request", 400

    if cpf != "Sem CPF":
        if CPF().validarcpf(CPF().padronizar(cpf)) == True:
            user = mongo.db.usuario.find_one({"cpf" : cpf})
            if user["senha_user"] != senha_user:
                return "Not found", 404
        else:
            return "Not Found", 404

    confirmacao = mongo.db.pev.find_one({"usuario": usuario})

    if confirmacao is not None and confirmacao["senha"] == senha:

        carga_total = confirmacao["carga"] + carga_adicionada

        mongo.db.evento.insert({
                                "usuario": usuario,
                                "carga": carga_total,
                                "volume": volume,
                                "lat": confirmacao["lat"],
                                "lng": confirmacao["lng"],
                                "carga_adicionada": carga_adicionada,
                                "cpf": cpf,
                                "data": datetime.datetime.now().isoformat(sep=" ")})

        mongo.db.pev.replace_one({"usuario": usuario}, {
                                "usuario": usuario,
                                "senha": senha,
                                "carga": carga_total,
                                "volume": volume,
                                "lat": confirmacao["lat"],
                                "lng": confirmacao["lng"],
                                "data": datetime.datetime.now().isoformat(sep=" ")})
        return "Ok", 200
    else:
        return 'Unathorized', 401