import React from 'react'; //importação do react em nosso codigo
import style from  './Botao.module.scss';

class Botao extends React.Component<any, any> { //criação de um componente e o nome do componente deve sempre ser escrito com a primeira letra maiuscula
    render() {      
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        ) 
    }
}

export default Botao; //Exportação do nosso componente