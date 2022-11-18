import { Itarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

//Utilização da function component, neste processo utiliza-se a sintaxe do JS para a criação dos componentes.

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props ) {
    return ( 
            /*-Reindenização do codigo, onde se utiliza a tag aside para separação de uma seção para o conteudo que sera retornado
            - A simples execução retornará apenas uma arrazy, porém queremos que a array seja percorria e que um html seja retornado e para isso utilizamos o map
            - map: O map é uma função JavaScript que permitira a array ser percorrida e retornar um html, o mesmo aceita 2 parametros como 
            - Utilizamos uma Kay no li para indicar ao React que o map esta sendo usado e qual DOM precisa ser reindenizado*/
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa} 
                        key={item.id}
                        {...item}
                    />
                ))}                
            </ul>
        </aside>
    )
}

export default Lista;