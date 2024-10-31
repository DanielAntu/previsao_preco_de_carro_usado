import "./Result.css";

const Result = ({ setForm, setYear, setMilage, data }) => {
    return (
        <div className="result">
            <h2>
                Aqui Esta as Característica do Carro e Abaixo o Valor Previsto
            </h2>
            <div className="row">
                <p>Ano de Fabricação</p>
                <p>{data.year}</p>
            </div>
            <div className="row">
                <p>Quilometragem</p>
                <p>{data.milage} km</p>
            </div>
            <div className="row">
                <p>Modelo</p>
                <p>{data.brand}</p>
            </div>
            <div className="row">
                <p>Tipo de Combustível</p>
                <p>{data.fuel_type}</p>
            </div>
            <div className="row">
                <p>Tipo de Transmissão</p>
                <p>{data.transmission}</p>
            </div>
            <div className="row">
                <p>Cor da parte externa</p>
                <p>{data.ext_col}</p>
            </div>
            <div className="row">
                <p>Cor da parte interna</p>
                <p>{data.int_col}</p>
            </div>
            <div className="row">
                <p>Acidente Relatado</p>
                <p>{data.accident}</p>
            </div>
            <div className="row price">
                <p>Valor Previsto</p>
                <p>$ {data.price.toFixed(2)}</p>
            </div>
            <button
                onClick={() => {
                    setForm(true);
                    setYear("");
                    setMilage("");
                }}>
                Voltar
            </button>
        </div>
    );
};

export default Result;
