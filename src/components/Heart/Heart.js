import { useState } from "react";
import "./style.css";
import IconEmpty from "../Imagens/Icons/Heart.svg";
import IconFilled from "../Imagens/Icons/Heart2.png";



export function Heart() {

    const [heart, setHeart] = useState(false);

    function sexy() {
        alert("Sexy?");
    }

    return (
        <button
            className="card-descricao-button"
            onClick={() => {
                setHeart(!heart);
            }}
        >
            {heart ? (

                <img alt="Sexy filled" src={IconFilled} />

            ) : (
                <button onClick={sexy}>
                    <img alt="Sexy empty" src={IconEmpty} />
                </button>
            )}
        </button>

    );
}