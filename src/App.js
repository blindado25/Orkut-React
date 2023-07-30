import logo from './logo.svg';
import './App.css';
import './styles/orkut.css';
import { Menu } from './components/Menu/menu.js';
import { CardPerfil } from './components/CardPerfil/CardPerfil.js';
import { CardDescricao } from "./components/CardDescricao/CardDescricao.js";
import { Amigos } from './components/CardAmigos/Amigos';
import { Comunidades } from './components/CardComunidades/Comunidades';

function App() {
  return (
    <div className="App">

      <Menu />

      <div className="espaco"></div>

      <div className="fundo">

        <div className="alinhamento">

          <CardPerfil />

          <CardDescricao />

          <div className="direita">
            <Amigos />
            <Comunidades />

          </div>
        </div>
      </div>


    </div>
  );
}
export default App;
