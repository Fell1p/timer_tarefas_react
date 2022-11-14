import React from 'react';
import Formulario from '../components/Formulario'; //importação do botão criado
import Lista from '../components/Lista';
import './style.scss';

function App() { //function que reindenizara nosso componente
  return ( //onde será criada a div responsavél por exibir nosso componente
    <div className="AppStyle">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;