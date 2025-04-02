from flask import Flask, request, jsonify
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
import sys

app = Flask(__name__)

@app.route('/train', methods=['POST'])
def train_model():
    print("Training model...")
    data = request.json
    df = pd.DataFrame(data)

    # Assuming the last column is the target variable
    X = df.iloc[:, :-1]
    y = df.iloc[:, -1]

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the model
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    # Save the model
    joblib.dump(model, 'model.joblib')

    return jsonify({'message': 'Model trained successfully'}), 200

@app.route('/predict', methods=['POST'])
def predict():
    model = joblib.load('model.joblib')
    data = request.json
    df = pd.DataFrame(data)

    predictions = model.predict(df)
    return jsonify(predictions.tolist()), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)