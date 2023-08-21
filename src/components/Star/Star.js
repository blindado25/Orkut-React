import { useState } from "react";
import "./style.css";
import IconEmpy from "../Imagens/Icons/Star.svg";
import IconFilled from "../Imagens/Icons/star2.png";



export function Star() {

    const [star, setStar] = useState(false);

    function StarAlert() {
        alert("Fã?");
    }



    return (
        <button
            className="card-descricao-button"
            onClick={() => {
                setStar(!star);
            }}
        >
            {star ? (

                <img alt="Star filled" src={IconFilled} />

            ) : (
                <button onClick={StarAlert}>
                    <img alt="Star empty" src={IconEmpy} />
                </button>
            )}
        </button>

    );
}