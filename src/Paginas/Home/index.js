import React from "react";
import { Link } from "react-router-dom";
import "./estilo.css";
import EstruturaPaginas from "../../Componentes/EstruturaPagina";

const Home = () => {
    return(
        <EstruturaPaginas>
            <main>
                <section className="banner">
                    <div className="container-limite conteudo-banner">
                        <div className="titulo-banner">
                            <h2>os melhores <span>aparelhos dentários!</span> </h2>
                            <p>Confira abaixo as especialidades odontólogicas que temos á sua desposição!</p>
                        </div>
                        <div className="listas">
                            <ul type="none">
                                <li>Pré-avaliação</li>
                                <li>Raio-X Digital</li>
                            </ul>
                            <ul type="none">
                                <li>Aparelhos dentários</li>
                                <li>Clareamento dental</li>
                            </ul>

                        </div>
                    </div>

                </section>

                <section className="secao-principal">
                    <div className=" conteudo-principal container-limite">
                        <div className="titulo-principal">
                            <h2>Por que usar o <span>aparelho?</span></h2>
                            <img src="assets/aparelho.png" alt="Dentes com aparelho" />
                        </div>
                        <div className="descricao-principal">
                            <div>
                                <h4> Dentes alinhados </h4>
                                <p> Dentes desalinhados trazem imperfeições no seu sorriso. Porém, um belo sorriso, trasmite boa impreção aos olhos de quem vê. Além de lhe trazer auto-estima </p>

                            </div>
                            <div>
                                <h4> Melhora a dicção e higiene bucal </h4>
                                <p> Tendo um belo sorriso, o seu dia a dia facilitará bastante sua dicção, para aqules que não entendia, poderam lhe ver e ouvir de forma diferente. Agora, com um sorriso lindo.</p>
                            </div>
                            <div>
                                <h4> Corrige o espaço entre os dentes </h4>
                                <p> Para você que não quer ter aquela famosa "porteirinha", e queira mudar o seu sorriso, com o uso do aparelho, você poderá ter uma outra aparência. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="secao-comentarios">
                    <div className="container-limite">
                        <h2> Veja o que nossos <span>clientes</span> estão falando...</h2>

                        <div className="container-comentarios">
                            <div>
                                <img src="assets/cliente01.png" alt="cliente número 01"></img>
                                <p> Roberto H. Santos</p>
                                <p> "Depois que fiz o tratamento, minha vida mudou. As pessoas, quando passam na rua e veem meu sorriso, tem olhres diferentes. Apreciam o meu sorriso, que antes não era visto."</p>
                            </div>
                            <div>
                                <img src="assets/cliente02.png" alt="Cliente número 02"></img>
                                <p> Nathalia D. Rodrigues</p>
                                <p> "Meus dias melhoraram e muito depois que fiz o tratamento. Não esperava ter tantos elogios sobre meu sorriso."</p>
                            </div>
                            <div>
                                <img src="assets/cliente03.png" alt="Cliente número 03"></img>
                                <p> Helena S. Marinho</p>
                                <p> "Eu estav com minha auto-estima baixa antes de pôr o aparelho, mas depois fiquei tão feliz. Meu sorriso melhorou bastante, me sentindo la pra cima!!!"</p>
                            </div>
                        </div>

                        <div className="botao">
                        <Link className="opcao-home" to="/contato"> Entre em contato </Link>
                        </div>
                    </div>
                </section>
            </main>
        </EstruturaPaginas>
    );

}
export default Home;