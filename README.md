# HTTPD Weeetel
Esse repositório contem as aplicações usadas no servidor web da Weee.Tel, contendo uma API e um Site.

## Instalação
Para rodar a aplicação para desenvolve-la é necessário que você já tenha instalados alguns programas, esses são:

 - [MongoDB ](https://docs.mongodb.com/manual/administration/install-community/)  4.0.6
 - git 2.11.0
 - Python 3.6
 - pip 19.0.3
 - python3-venv

Qualquer versão mais nova que as mostradas acima também deve funcionar.

Após isso basta seguir os próximos passos pelo terminal de sua maquina Linux:

1. Clonar o repositorio:
```bash
git clone https://gitlab.com/weeetel/servidor/httpd
```
2. Criar um virtualenv e ativá-lo:
```bash
python3 -m venv venv
source venv/bin/activate
```
3. Instalar as dependências:
```bash
cd httpd/
pip install -r requirements.txt
```
4. Iniciar e importar os dados do banco de dados. Caso não tenha ativado o banco de dados o comando é:
```
sudo service mongod start
mongorestore dump/
```
5. Rodar aplicação (apenas para ambientes de testes!):
```
python wsgi.py
```

Se não ocorreu nenhum erro a aplicação esta pronta para ser usada, desenvolvida e testada. Se seu objetivo for usar a aplicação como produto, ou algo do tipo, é preciso configurar um servidor HTTP como o [Nginx](https://nginx.org) ou o [Apache](https://httpd.apache.org) antes.

## Organização dos arquivos

A aplicação é dividida em duas aplicações diferentes que foram mescladas com a ajuda de um recurso do flask chamado [Blueprint](http://flask.pocoo.org/docs/1.0/blueprints/). Dentro da pasta `/blueprint` temos as duas aplicações, `/api` e `/site`. Cada uma delas pode possuir os seguintes arquivos:

 - `views.py`: onde ficam as rotas e a parte lógica da aplicação
 - `classes.py`: onde ficam as classes usadas pela aplicação
 - `/templates`: onde ficam os templates html renderizados na `views.py`
 - `__init__.py`: é o arquivo que transforma uma pasta em um pacote, permitindo assim importar os arquivos, módulos ou classes pela aplicação

 Há também dentro da pasta `/blueprints` o arquivo `config.py`, que é onde ficam todas as configurações do flask.

## Amazon EC2

Todo o programa esta rodando em uma maquina virtual da Amazon que está localizado no domínio [weeetel.site](https://weeetel.site/), qualquer modificação feita no repositório precisa ser manualmente instalada na máquina virtual por SSH.
