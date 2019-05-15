import re
from flask_wtf import FlaskForm, RecaptchaField
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired
from werkzeug.security import check_password_hash


class FormularioRegistro(FlaskForm):

    usuario = StringField('Usuario', validators=[DataRequired()], render_kw={
                          "placeholder": "Usuário"})
    senha = PasswordField('Senha', validators=[DataRequired()], render_kw={
                          'placeholder': 'Senha'})
    recaptcha = RecaptchaField()


class FormularioLogin(FlaskForm):

    usuario = StringField('Usuario', validators=[DataRequired()], render_kw={
                          "placeholder": "Usuário"})
    senha = PasswordField('Senha', validators=[DataRequired()], render_kw={
                          'placeholder': 'Senha'})
    recaptcha = RecaptchaField()


class User():

    def __init__(self, usuario):
        self.usuario = usuario

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.usuario

    @staticmethod
    def validar_login(senha_hash, senha):
        return check_password_hash(senha_hash, senha)


class CPF():

    def padronizar(self, cpf):
        cpf_padrao = re.sub('[^A-Za-z0-9]+', '', cpf)
        return cpf_padrao

    def validarcpf(self, cpf):

        if len(cpf) != 11:
            return False

        cpf_ver = cpf[0:9]
        digito_verif = []

        for x in range(2):
            i = 0
            cpf_value = 0
            while i < (9 + x):
                cpf_value += int(cpf[i]) * (10 - i + x)
                i += 1
            digito_verif.append(cpf_value % 11)

        for x in digito_verif:
            if x < 2:
                cpf_ver += "0"
            else:
                cpf_ver += str(11 - x)

        if cpf == cpf_ver:
            return True
        else:
            return False
