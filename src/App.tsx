import React from 'react';
import Formulario from './components/Formulario'; //importação do botão criado
import Lista from './components/Lista';

function App() { //function que reindenizara nosso componente
  return ( //onde será criada a div responsavél por exibir nosso componente
    <div className="App">
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
