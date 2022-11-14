import React from "react";

//Utilização da function component, neste processo utiliza-se a sintaxe do JS para a criação dos componentes.

function Lista() {
    const tarefas = [{  //Criação de uma array de ojetos onde adicionaremos li's de maneira dinamica, assim, diminuindo linhas de codigo
        tarefa: 'React',
        tempo: '02.00:00'
    }, 
    {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    },
    {
        tarefa: "typeScript",
        tempo: '03:00:00'
    }]
    return ( 
            /*-Reindenização do codigo, onde se utiliza a tag aside para separação de uma seção para o conteudo que sera retornado
            - A simples execução retornará apenas uma arrazy, porém queremos que a array seja percorria e que um html seja retornado e para isso utilizamos o map
            - map: O map é uma função JavaScript que permitira a array ser percorrida e retornar um html, o mesmo aceita 2 parametros como */
        <aside>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tarefa} </h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}                
            </ul>
        </aside>
    )
}

export default Lista;