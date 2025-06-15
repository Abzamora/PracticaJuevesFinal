import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container } from 'reactstrap';
import Barran from "./componentes/Barran";
import Footer from "./componentes/Footer";


function Maqueta(props) {
    return(
        <div className="bg-secondary">
            <div className="bg-dark text-white mt-2 p-4"><Container>
                <h1>CARETELERA: ACTORES Y PELICULAS</h1></Container>
            </div>
            <div className="bg-black text-white m-3 p-4">
                <Barran></Barran>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Maqueta;