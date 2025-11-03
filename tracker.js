import time
import pygetwindow as gw
import json
from flask import Flask, jsonify

app = Flask(__name__)
usage = {}

def get_active_window():
    try:
        return gw.getActiveWindowTitle()
    except:
        return None

@app.route('/api/usage')
def send_usage():
    # Format: {'App Name': '1m 20s'}
    formatted = {
        app: f"{int(seconds // 60)}m {int(seconds % 60)}s"
        for app, seconds in usage.items()
    }
    return jsonify(formatted)

def track():
    while True:
        active = get_active_window()
        if active:
            usage[active] = usage.get(active, 0) + 1
        time.sleep(1)

if __name__ == '__main__':
    import threading
    tracking_thread = threading.Thread(target=track)
    tracking_thread.daemon = True
    tracking_thread.start()
    app.run(port=5000)
