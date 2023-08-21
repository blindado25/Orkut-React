import { useState } from "react";
import "./style.css";
import IconEmpy from "../Imagens/Icons/Smiley.svg";
import IconFilled from "../Imagens/Icons/Smiley2.png";



export function Smiley() {

    const [smiley, setSmiley] = useState(false);

    function SmileyAlert() {
        alert("Confiável?");
    }

    return (
        <button
            className="like-button"
            onClick={() => {
                setSmiley(!smiley);
            }}
        >
            {smiley ? (

                <img alt="Smiley filled" src={IconFilled} />

            ) : (
                <button onClick={SmileyAlert}>
                    <img alt="Smiley empty" src={IconEmpy} />
                </button>
            )}
        </button>

    );
}