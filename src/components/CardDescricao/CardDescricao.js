import './CardDescricao.css';
import '../Menu/reset.css';
import { Icon1 } from "../Imagens/Icons/icon1.js";
import { Icon2 } from "../Imagens/Icons/icon2.js";
import { Icon3 } from "../Imagens/Icons/icon3.js";
import { Icon4 } from "../Imagens/Icons/icon4.js";


export function CardDescricao() {
    function legal() {
        alert("Legal?");
    }

    function sexy() {
        alert("Sexy?");
    }

    function smiley() {
        alert("Confiável?");
    }

    function star() {
        alert("Fã?");
    }

    return (

        <div className="centro-alinhamento">
            <h1>Boa tarde, Geralt de Rivia</h1>

            <div>
                <img src="./Imagens/triangle.png" alt="" />
                <h2>Mal é mal...Menor, maior, médio. É a mesma coisa.</h2>
            </div>

            <div className="centro-topo">
                <p>
                    Fãs
                    <span>
                        <button onClick={star}>
                            <Icon1 />
                        </button>
                        <span className="fas">85</span>
                    </span>
                </p>
                <p>
                    Confiável
                    <span>
                        <button onClick={smiley}>
                            <Icon2 />
                        </button>
                        <button onClick={smiley}>
                            <Icon2 />
                        </button>
                    </span>
                </p>
                <p>
                    Legal
                    <span>
                        <button onClick={legal}>
                            <Icon3 />
                        </button>
                        <button onClick={legal}>
                            <Icon3 />
                        </button>
                        <button onClick={legal}>
                            <Icon3 />
                        </button>
                    </span>
                </p>
                <p>
                    Sexy
                    <span>
                        <button onClick={sexy}>
                            <Icon4 />
                        </button>
                        <button onClick={sexy}>
                            <Icon4 />
                        </button>
                    </span>
                </p>
            </div>

            <div className="centro-meio">
                <div className="div1">
                    Relacimento:
                    <p>Solteiro</p>
                </div>
                <div className="div1">
                    Aniversário:
                    <p>21 de Julho</p>
                </div>
                <div className="div1">
                    idade:
                    <p>22</p>
                </div>
                <div className="div1">
                    Interesse no Orkut:
                    <p>Solteiro</p>
                </div>
                <div className="div1">
                    Quem sou eu:
                    <p>Programador</p>
                </div>
                <div className="div1">
                    Filhos:
                    <p>Não</p>
                </div>
                <div className="div1">
                    Bebo:
                    <p>Depende do dia</p>
                </div>
                <div className="div1">
                    Moro:
                    <p>Rivia</p>
                </div>
                <div className="div1">
                    Pais:
                    <p>Brasil</p>
                </div>
                <div className="div1">
                    Cidade natal:
                    <p>São Paulo</p>
                </div>
                <div className="div1">
                    Musicas:
                    <p className="borda1">Trap</p>
                    <p className="borda1">Rap</p>
                    <p className="borda1">Indie</p>
                    <a href="" target="_blank">
                        <span className="rosa">Ver todos</span>
                    </a>
                </div>
                <div className="div1">
                    Filmes:
                    <p className="borda1">A rede social</p>
                    <p className="borda1">Meu amigo totoro</p>
                    <a href="" target="_blank">
                        <span className="rosa">Ver todos</span>
                    </a>
                </div>
            </div>
        </div>
    );
}