import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario'; //importação do botão criado
import Lista from '../components/Lista';
import style from './App.module.scss';

function App() { //function que reindenizara nosso componente
  return ( //onde será criada a div responsavél por exibir nosso componente
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
