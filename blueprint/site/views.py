from blueprint import mongo, login_manager
from flask import render_template, redirect, url_for, Blueprint, flash
from blueprint.site.classes import FormularioRegistro, FormularioLogin, User
from werkzeug.security import generate_password_hash
from flask_login import login_user, logout_user, login_required, current_user
from bson.json_util import dumps


mod = Blueprint('site', __name__, template_folder='templates')


@login_manager.user_loader
def load_usuario(usuario):
    u = mongo.db.usuarios.find_one({'nome': usuario})
    if not u:
        return None
    return User(u['_id'])


@mod.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@mod.route('/home')
@login_required
def home():
    pev = dumps(mongo.db.evento.find())
    return render_template('home.html', pev=pev)


@mod.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated is not False:
        return redirect(url_for('site.home'))
    formulario = FormularioLogin()
    if formulario.validate_on_submit():
        usuario_atual = mongo.db.usuarios.find_one(
            {'nome': formulario.usuario.data})
        if usuario_atual and User.validar_login(usuario_atual['senha'], formulario.senha.data):
            usuario_id = User(usuario_atual['nome'])
            login_user(usuario_id)
            return redirect(url_for('site.home'))
        flash('Usuario ou senha incorretos!')
    return render_template('login.html', formulario=formulario)


@mod.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('site.login'))


@mod.route('/registro', methods=['GET', 'POST'])
def registro():
    if current_user.is_authenticated is not False:
        return redirect(url_for('site.home'))
    formulario = FormularioRegistro()
    if formulario.validate_on_submit():
        usuarios = mongo.db.usuarios
        usuario_existente = usuarios.find_one(
            {'nome': formulario.usuario.data})
        if usuario_existente is None:
            senha_hash = generate_password_hash(formulario.senha.data)
            usuarios.insert(
                {'nome': formulario.usuario.data, 'senha': senha_hash})
            usuario_atual = mongo.db.usuarios.find_one(
                {'nome': formulario.usuario.data})
            usuario_id = User(usuario_atual['nome'])
            login_user(usuario_id)
            return redirect(url_for('site.home'))
        flash('Esse usuario ja existe!')
    return render_template('registro.html', formulario=formulario,)

@mod.route('/doc',)
def doc():
    return render_template('doc.html')