import '../Menu/reset.css';
import './Amigos.css';
import { Amigo1 } from "../Imagens/Amigos/Amigo1";
import { Amigo2 } from "../Imagens/Amigos/Amigo2";
import { Amigo3 } from "../Imagens/Amigos/Amigo3";
import { Amigo4 } from "../Imagens/Amigos/Amigo4";
import { Amigo5 } from "../Imagens/Amigos/Amigo5";
import { Amigo6 } from "../Imagens/Amigos/Amigo6";
import { Amigo7 } from "../Imagens/Amigos/Amigo7";
import { Amigo8 } from "../Imagens/Amigos/Amigo8";
import { Amigo9 } from "../Imagens/Amigos/Amigo9";
import { Comunidade1 } from "../Imagens/Comunidade/Comunidade1";
import { Comunidade2 } from "../Imagens/Comunidade/Comunidade2";
import { Comunidade3 } from "../Imagens/Comunidade/Comunidade3";
import { Comunidade4 } from "../Imagens/Comunidade/Comunidade4";
import { Comunidade5 } from "../Imagens/Comunidade/Comunidade5";
import { Comunidade6 } from "../Imagens/Comunidade/Comunidade6";
import { Comunidade7 } from "../Imagens/Comunidade/Comunidade7";
import { Comunidade8 } from "../Imagens/Comunidade/Comunidade8";
import { Comunidade9 } from "../Imagens/Comunidade/Comunidade9";


export function Amigos() {
    return (


        <div className="amigos">
            <h1>
                <a href="" target="_blank">Amigos (248)</a>
                <a href="" target="_blank"><span className="rosa">Ver Todos</span></a>
            </h1>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo1 />
                    <p>Fernando</p>
                </a>
            </div>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo2 />
                    <p>Ana</p>
                </a>
            </div>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo3 />
                    <p>Carlos</p>
                </a>
            </div>

            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo4 />
                    <p>Vitor</p>
                </a>
            </div>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo5 />
                    <p>Matheus</p>
                </a>
            </div>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo6 />
                    <p>Ramos</p>
                </a>
            </div>

            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo7 />
                    <p>Eiji</p>
                </a>
            </div>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo8 />
                    <p>Julia</p>
                </a>
            </div>
            <div className="amigo">
                <a href="" target="_blank">
                    <Amigo9 />
                    <p>Carol</p>
                </a>
            </div>
        </div>




    );
}