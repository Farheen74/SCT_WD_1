from flask import Flask, render_template, request, jsonify
import threading
import webbrowser
import time

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/features')
def features():
    return render_template('features.html')


@app.route('/pricing')
def pricing():
    return render_template('pricing.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'GET':
        return render_template('contact.html')
    data = request.get_json() or request.form
    # Demo: echo back a success response. In production, validate and persist.
    return jsonify({'status': 'success', 'message': 'Thanks, we received your message.'})


def _open_browser(url: str, delay: float = 0.5):
    """Open the given URL in a new browser window after a short delay."""
    time.sleep(delay)
    try:
        webbrowser.open(url, new=1)  # new=1 -> open in new window if possible
    except Exception:
        pass


if __name__ == '__main__':
    url = 'http://127.0.0.1:5000/'
    threading.Thread(target=_open_browser, args=(url,), daemon=True).start()
    # Disable the reloader to avoid opening multiple browser windows
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)
