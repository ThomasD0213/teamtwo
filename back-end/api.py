from flask import Flask, request
import sqlite3
import json

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/")
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

@app.route("/addUser", methods=['POST'])
def add_user():
    conn = get_db_connection()
    cursor = conn.cursor()
    profiles = cursor.execute(f"INSERT INTO profiles VALUES ({request.form['first_name']}, {request.form['last_name']}, {request.form['role']}, {request.form['major']}, {request.form['email']}, {request.form['phone']}, {request.form['pfp']})")
    cursor.close()
    conn.close()
    
