import { useState, useEffect } from "react";
import "./Form.css";

const Form = ({
    handleSubmit,
    year,
    setYear,
    milage,
    setMilage,
    setBrand,
    setFuel,
    setTransmission,
    setExt_color,
    setInt_color,
    setAccident,
    loading,
}) => {
    const url = "http://127.0.0.1:5000/";

    const getFetch = async (endpoint, set) => {
        const response = await fetch(url + endpoint);
        const data = await response.json();
        set(data);
    };

    const [brands, setBrands] = useState([]);
    const [fuels, setFuels] = useState([]);
    const [transmissions, setTransmissions] = useState([]);
    const [ext_cols, setExt_cols] = useState([]);
    const [int_cols, setInt_cols] = useState([]);
    const [accidents, setAccidents] = useState([]);

    const yearWork = new Date().getFullYear();

    useEffect(() => {
        getFetch("brands", setBrands);
        getFetch("fuel_type", setFuels);
        getFetch("transmission", setTransmissions);
        getFetch("ext_col", setExt_cols);
        getFetch("int_col", setInt_cols);
        getFetch("accident", setAccidents);
    }, []);

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input
                        type="number"
                        name="year"
                        id="year"
                        placeholder="Ano de Fabricação"
                        min={1900}
                        max={yearWork}
                        required
                        onChange={(e) => setYear(e.target.value)}
                        value={year}
                    />
                </div>
                <div className="form-control">
                    <input
                        type="number"
                        name="milage"
                        id="milage"
                        placeholder="Quilometragem Rodada"
                        required
                        onChange={(e) => setMilage(e.target.value)}
                        value={milage}
                    />
                </div>
                <div className="form-control">
                    <select
                        name="brand"
                        id="brand"
                        onChange={(e) => setBrand(e.target.value)}
                        required>
                        <option value="" aria-readonly>
                            Selecione um modelo
                        </option>
                        {brands &&
                            brands.map((brand) => (
                                <option value={brand[0]} key={brand[0]}>
                                    {brand[1]}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="form-control">
                    <select
                        name="fuel_type"
                        id="fuel_type"
                        onChange={(e) => setFuel(e.target.value)}
                        required>
                        <option value="" aria-readonly>
                            Selecione o tipo de combustível
                        </option>
                        {fuels &&
                            fuels.map((brand) => (
                                <option value={brand[0]} key={brand[0]}>
                                    {brand[1]}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="form-control">
                    <select
                        name="transmission"
                        id="transmission"
                        onChange={(e) => setTransmission(e.target.value)}
                        required>
                        <option value="" aria-readonly>
                            Selecione a transmissão
                        </option>
                        {transmissions &&
                            transmissions.map((transmission) => (
                                <option
                                    value={transmission[0]}
                                    key={transmission[0]}>
                                    {transmission[1]}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="form-control">
                    <select
                        name="ext_col"
                        id="ext_col"
                        onChange={(e) => setExt_color(e.target.value)}
                        required>
                        <option value="" aria-readonly>
                            Selecione cor externa
                        </option>
                        {ext_cols &&
                            ext_cols.map((ext_col) => (
                                <option value={ext_col[0]} key={ext_col[0]}>
                                    {ext_col[1]}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="form-control">
                    <select
                        name="int_col"
                        id="int_col"
                        onChange={(e) => setInt_color(e.target.value)}
                        required>
                        <option value="" aria-readonly>
                            Selecione cor interna
                        </option>
                        {int_cols &&
                            int_cols.map((int_col) => (
                                <option value={int_col[0]} key={int_col[0]}>
                                    {int_col[1]}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="form-control">
                    <select
                        name="accident"
                        id="accident"
                        onChange={(e) => setAccident(e.target.value)}
                        required>
                        <option value="" aria-readonly>
                            Selecione se teve algum acidente relatado
                        </option>
                        {accidents &&
                            accidents.map((accident) => (
                                <option value={accident[0]} key={accident[0]}>
                                    {accident[1]}
                                </option>
                            ))}
                    </select>
                </div>
                {!loading && <button>Calcular</button>}
                {loading && <button disabled>Carregando...</button>}
            </form>
        </div>
    );
};

export default Form;
