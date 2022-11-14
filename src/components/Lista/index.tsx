import React from "react";

//Utilização da function component, neste processo utiliza-se a sintaxe do JS para a criação dos componentes.

function Lista() {
    return (
        <aside>
            <h2> Estudos do dia</h2>
            <ul>
                <li>
                    <h3>
                        React
                    </h3>
                    <span>
                        02:00:00
                    </span>
                </li>
                <li>
                    <h3>
                        JavaScript  
                    </h3>
                    <span>
                        01:00:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}

export default Lista;