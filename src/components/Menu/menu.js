import '../Menu/reset.css';
import '../Menu/menu.css';
import Logo from "./imagens/Logo.png";
import MagnifyingGlass from "./imagens/MagnifyingGlass.svg";
import LogoTopo from "./imagens/a8Em4R6_460s.jpg";
import CaretDown from "./imagens/CaretDown.svg"


export function Menu() {
    return (
        <div className="color-top">
            <div className="menu">
                <div className="alinhamento-topo">
                    <a href="https://www.orkut.com/index_pt.html" target="_blank">
                        <img src={Logo} />
                    </a>
                    <div className="menu-esquerda">
                        <a href="" target="_blank"><p>inicio</p></a>
                        <a href="" target="_blank"><span>Perfil</span></a>
                        <a href="" target="_blank"><p>Comunidades</p></a>
                        <a href="" target="_blank"><p>Jogos</p></a>
                    </div>
                    <div className="botao-pesquisa">
                        <img src={MagnifyingGlass} />
                        <input type="text" placeholder="Pesquisa no Orkut" />
                    </div>
                    <a href="" target="_blank">
                        <div className="topo-direita">
                            <div className="foto-contem">
                                <img
                                    className="foto-topo-direito"
                                    src={LogoTopo}
                                    alt=""
                                />
                            </div>
                            Geralt Rivia
                            <img src={CaretDown} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}