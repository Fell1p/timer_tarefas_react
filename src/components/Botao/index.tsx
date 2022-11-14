import React from 'react'; //importação do react em nosso codigo

class Botao extends React.Component { //criação de um componente e o nome do componente deve sempre ser escrito com a primeira letra maiuscula
    render(): React.ReactNode {
        return (
            <button>
                Botão
            </button>
        )
    }
}

export default Botao; //Exportação do nosso componente