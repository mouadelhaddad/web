from flask import Flask, render_template, request
import time

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/execution_updates')
def execution_updates():
    return render_template('execution_updates.html')

@app.route('/generate_file', methods=['POST'])
def generate_file():
    file1 = request.files['file1']
    file2 = request.files['file2']
    start_date = request.form['start-date']
    end_date = request.form['end-date']

    # Perform file generation logic here
    progress = 0

    while progress < 100:
        # Update progress
        progress += 10
        time.sleep(1)  # Simulate some processing time

    return 'File generation completed!'

if __name__ == '__main__':
    app.run()