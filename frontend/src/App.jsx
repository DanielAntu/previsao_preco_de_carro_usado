import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Result from "./components/Result";

import "./App.css";

function App() {
    const url = "http://127.0.0.1:5000/";

    const [year, setYear] = useState("");
    const [milage, setMilage] = useState("");
    const [brand, setBrand] = useState("");
    const [fuel, setFuel] = useState("");
    const [transmission, setTransmission] = useState("");
    const [ext_color, setExt_color] = useState("");
    const [int_color, setInt_color] = useState("");
    const [accident, setAccident] = useState("");
    const [data, setData] = useState({});
    const [isForm, setIsForm] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !year ||
            !milage ||
            !brand ||
            !fuel ||
            !transmission ||
            !ext_color ||
            !int_color ||
            !accident
        )
            return;

        const obj = {
            year: year,
            milage: milage,
            brand: brand,
            fuel_type: fuel,
            transmission: transmission,
            ext_col: ext_color,
            int_col: int_color,
            accident: accident,
        };
        setLoading(true);
        const response = await fetch(url + "predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        const data = await response.json();

        setData(data);
        setLoading(false);
        setIsForm(false);
    };

    return (
        <div className="app">
            <Header />
            <div className="container">
                {isForm ? (
                    <Form
                        handleSubmit={handleSubmit}
                        year={year}
                        setYear={setYear}
                        milage={milage}
                        setMilage={setMilage}
                        setBrand={setBrand}
                        setFuel={setFuel}
                        setTransmission={setTransmission}
                        setExt_color={setExt_color}
                        setInt_color={setInt_color}
                        setAccident={setAccident}
                        loading={loading}
                    />
                ) : (
                    <Result
                        setForm={setIsForm}
                        setYear={setYear}
                        setMilage={setMilage}
                        data={data}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
