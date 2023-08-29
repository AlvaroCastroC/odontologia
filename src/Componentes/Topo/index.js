import { Link } from "react-router-dom";
import React from "react";
import "./estilo.css";

const Topo = () => {
    return(
        <header>
            <div className="topo container-limite">
                <div>
                    <Link className="opcao-home" to="/">

                    <img src="assets/dente.png" alt="Dente" title="Logo"/>
                    <p>Dentes Saudáveis</p>
                    
                    </Link>
                </div>

                <nav>
                    <Link className="opcao-home" to="/"> Home </Link>
                    <Link className="opcao-home" to="/contato"> Contato </Link>
                </nav>
            </div>
        </header>
    );
}
export default Topo;