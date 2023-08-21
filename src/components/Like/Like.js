import { useState } from "react";
import "./style.css";
import IconEmpty from "../Imagens/Icons/Like.svg";
import IconFilled from "../Imagens/Icons/Like2.png";



export function Like() {

    const [liked, setLiked] = useState(false);

    function legal() {
        alert("Legal?");
    }

    return (
        <button
            className="card-descricao-button"
            onClick={() => {
                setLiked(!liked);
            }}
        >
            {liked ? (

                <img alt="Like filled" src={IconFilled} />

            ) : (
                <button onClick={legal}>
                    <img alt="Like empty" src={IconEmpty} />
                </button>
            )}
        </button>

    );
}