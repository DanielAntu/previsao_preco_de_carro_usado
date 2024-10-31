import { BsFillCarFrontFill } from "react-icons/bs";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1>
                <BsFillCarFrontFill />
                <span>Preço de Carro Usado</span>
            </h1>
        </div>
    );
};

export default Header;
