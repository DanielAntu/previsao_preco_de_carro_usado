from flask import Flask, jsonify, request
from flask_cors import CORS

from db import *
from model import load_model

app = Flask(__name__)
CORS(app)

def search_name(list, inp):
    for i in list:
        if i[0] == inp:
            return i[1]


@app.route('/brands')
def get_brands():
    return jsonify(list_brands)

@app.route('/fuel_type')
def get_fuel_type():
    return jsonify(list_fuel_type)

@app.route('/transmission')
def get_transmission():
    return jsonify(list_transmission)

@app.route('/ext_col')
def get_ext_col():
    return jsonify(list_ext_col)

@app.route('/int_col')
def get_int_col():
    return jsonify(list_int_col)

@app.route('/accident')
def get_accident():
    return jsonify(list_accident)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    try:
        year = int(data['year'])
        milage = float(data['milage'])
        brand = int(data['brand'])
        fuel_type = int(data['fuel_type'])
        transmission = int(data['transmission'])
        ext_col = int(data['ext_col'])
        int_col = int(data['int_col'])
        accident = int(data['accident'])

        brand_name = search_name(list_brands, brand)
        fuel_type_name = search_name(list_fuel_type, fuel_type)
        transmission_name = search_name(list_transmission, transmission)
        ext_col_name = search_name(list_ext_col, ext_col)
        int_col_name = search_name(list_int_col, int_col)
        accident_name = search_name(list_accident, accident)


        list_var = [year, milage, brand, fuel_type, transmission, ext_col, int_col, accident]
        price = load_model(list_var)
        obj = {
            'year': year,
            'milage': milage,
            'brand': brand_name,
            'fuel_type': fuel_type_name,
            'transmission': transmission_name,
            'ext_col': ext_col_name,
            'int_col': int_col_name,
            'accident': accident_name,
            'price': price
        }


        return jsonify(obj)
    except Exception as e:
        print(e)
        return jsonify({'error': 'Erro ao fazer a previsão.'}), 400


if __name__ == '__main__':
    app.run(debug=True)