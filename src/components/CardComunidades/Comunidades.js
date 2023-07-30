import '../Menu/reset.css';
import './Comunidades.css';
import { Comunidade1 } from "../Imagens/Comunidade/Comunidade1";
import { Comunidade2 } from "../Imagens/Comunidade/Comunidade2";
import { Comunidade3 } from "../Imagens/Comunidade/Comunidade3";
import { Comunidade4 } from "../Imagens/Comunidade/Comunidade4";
import { Comunidade5 } from "../Imagens/Comunidade/Comunidade5";
import { Comunidade6 } from "../Imagens/Comunidade/Comunidade6";
import { Comunidade7 } from "../Imagens/Comunidade/Comunidade7";
import { Comunidade8 } from "../Imagens/Comunidade/Comunidade8";
import { Comunidade9 } from "../Imagens/Comunidade/Comunidade9";


export function Comunidades() {
    return (

        <div className="comunidades">
            <div className="amigos">
                <h1>
                    <a href="" target="_blank">Comunidade (42)</a>
                    <a href="" target="_blank">
                        <span className="rosa">Ver Todos</span>
                    </a>
                </h1>

                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade1 />
                        <p>Carros</p>
                    </a>
                </div>
                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade2 />
                        <p>Desenhos</p>
                    </a>
                </div>
                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade3 />
                        <p>Crazy</p>
                    </a>
                </div>


                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade4 />
                        <p>Fofos</p>
                    </a>
                </div>
                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade5 />
                        <p>Animes</p>
                    </a>
                </div>
                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade6 />
                        <p>Leitura</p>
                    </a>
                </div>

                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade7 />
                        <p>Meu ovo</p>
                    </a>
                </div>
                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade8 />
                        <p>My books</p>
                    </a>
                </div>
                <div className="amigo">
                    <a href="" target="_blank">
                        <Comunidade9 />
                        <p>Cafeeee</p>
                    </a>
                </div>


            </div>
        </div>

    );
}