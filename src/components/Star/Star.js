import { useState } from "react";
import "./style.css";
import IconEmpy from "../Imagens/Icons/Star.svg";
import IconFilled from "../Imagens/Icons/star2.png";



export function Star() {

    const [star, setStar] = useState(false);

    const [count, setCount] = useState(85);

    function StarAlert() {
        alert("Fã?");
    }



    return (
        <div className="star-descricao">
            <button
                className="card-descricao-button"
                onClick={() => {
                    setStar(!star);
                }}
            >
                {star ? (
                    <button onClick={() => setCount(count - 1)}>
                        <img alt="Star filled" src={IconFilled} />
                    </button>
                ) : (
                    <button onClick={StarAlert}>
                        <button onClick={() => setCount(count + 1)}>
                            <img alt="Star empty" src={IconEmpy} />
                        </button>
                    </button>
                )}
            </button>
            {count}
        </div>

    );
}