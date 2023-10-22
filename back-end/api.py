from flask import Flask, request
from flask_cors import CORS
import sqlite3
import json

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/getProfiles")
def hello():
    conn = get_db_connection()
    cursor = conn.cursor()
    profiles = cursor.execute('SELECT * FROM profiles')
    rows = cursor.fetchall()
    columns = [col[0] for col in cursor.description]
    data = [dict(zip(columns, row)) for row in rows]
    cursor.close()
    conn.close()
    return json.dumps(data)

@app.route("/getProjects")
def get_projects():
    conn = get_db_connection()
    cursor = conn.cursor()
    profiles = cursor.execute('SELECT * FROM projects')
    rows = cursor.fetchall()
    columns = [col[0] for col in cursor.description]
    data = [dict(zip(columns, row)) for row in rows]
    cursor.close()
    conn.close()
    return json.dumps(data)

@app.route("/<id>")
def get_profile_by_id(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    profiles = cursor.execute(f'SELECT * FROM profiles WHERE id = {id}')
    rows = cursor.fetchall()
    columns = [col[0] for col in cursor.description]
    data = [dict(zip(columns, row)) for row in rows]
    cursor.close()
    conn.close()
    return json.dumps(data)


@app.route("/getProjects/<id>")
def get_project_by_id(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    profiles = cursor.execute(f'SELECT * FROM projects WHERE id = {id}')
    rows = cursor.fetchall()
    columns = [col[0] for col in cursor.description]
    data = [dict(zip(columns, row)) for row in rows]
    cursor.close()
    conn.close()
    return json.dumps(data)

@app.route("/addUser", methods=['POST'])
def add_user():
    _json = request.get_json()
    print(f'json is {_json}')
    conn = get_db_connection()
    cursor = conn.cursor()
    request_str = f"INSERT INTO profiles (first_name, last_name, role, major, email, number) VALUES (\"{_json['first_name']}\", \"{_json['last_name']}\", \"{_json['role'] if _json['role'] != '' else 'bungus'}\", \"{_json['major']}\", \"{_json['email'] if _json['email'] != '' else 'bungus'}\", \"{_json['phone'] if _json['phone'] != '' else 'bungus'}\")"
    print(request_str)
    profiles = cursor.execute(request_str)
    conn.commit()
    cursor.close()
    conn.close()
    return "i am a teapot"
    
@app.route("/addProject", methods=['POST'])
def add_project():
    _json = request.get_json()
    print(f'json is {_json}')
    conn = get_db_connection()
    cursor = conn.cursor()
    request_str = f"INSERT INTO projects (name, owner, description, skills, paid, timeline, status, contact) VALUES (\"{_json['name']}\", \"{_json['owner']}\", \"{_json['description']}\", \"{_json['skills']}\", {_json['paid']}, \"{_json['timeline']}\", \"{_json['status']}\", {_json['contact']}\")"
    print(request_str)
    projects = cursor.execute(request_str)
    conn.commit()
    cursor.close()
    conn.close()
    return "i am a teapot"