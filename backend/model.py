import joblib

model = joblib.load('modelo_final.pkl')

def load_model(list):
    model = joblib.load('modelo_final.pkl')
    prediction = model.predict([list])
    return prediction[0]


if __name__ == '__main__':
    print(load_model([2013, 51000.0, 11, 1, 5, 0, 1, 0]))