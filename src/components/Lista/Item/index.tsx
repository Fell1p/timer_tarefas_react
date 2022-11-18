import { Itarefa } from '../../../types/tarefa'
import style from '../Lista.module.scss'

interface Props extends Itarefa {    
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa 
    }: Props){
    return(
        <li className={style.item} onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}