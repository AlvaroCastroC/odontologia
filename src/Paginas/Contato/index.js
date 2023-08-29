import React from "react";
import Mapa from "../../Componentes/Mapa";
import "./estilo.css";

import EstruturaPaginas from "../../Componentes/EstruturaPagina";

const Contato = () => {
    return(
        <EstruturaPaginas>
            <section className="contato">
                <div>
                    <div className="titulo-contato">
                    <h2> Horários de atendimento </h2>
                    <p> Agende uma consulta pelo telefone (21) 99555 - 5555 </p>
                    </div>
                    <div className="container-horario">
                        <div>
                            <img src=" assets/medico01.png" alt="Médico número 01"></img>
                            <p>Dr. Hélio</p>
                            <p>Segunda, quartas e sextas das 09:00 ás 16:00 </p>
                        </div>
                        <div>
                            <img src="assets/medico02.png " alt="Médico número 02"></img>
                            <p>Dr. Carlos</p>
                            <p>Terças e quintas das 13:00 ás 18:00</p>
                        </div>
                        <div>
                            <img src=" assets/medico03.png" alt="Médico número 03"></img>
                            <p>Dr. Carina</p>
                            <p>Aos Sábados e Domingos das 09:00 ás 18:00</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="mapa">
                <h2>Onde estamos <span>localizados?</span></h2>
                <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
                <Mapa />
            </section>
        </EstruturaPaginas>
    );
}
export default Contato;