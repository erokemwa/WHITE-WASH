from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'  # Use SQLite database for
db = SQLAlchemy(app)

class WHITEWASH(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Integer, default=8)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Video %r' % self.id

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
        app.run(debug=True) 