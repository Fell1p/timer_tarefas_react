import React from 'react'; //importação do react em nosso codigo
import style from  './Botao.module.scss';

class Botao extends React.Component { //criação de um componente e o nome do componente deve sempre ser escrito com a primeira letra maiuscula
    render(): React.ReactNode {      
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Botao; //Exportação do nosso componente