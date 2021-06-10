import React from 'react'

import GraficoPopulacao from './compenents/GraficoPopulacao'
import GraficoMunicipios from './compenents/GraficoMunicipios'

import './App.css';

const App = () => {

  return (
    <div>
      <div className="container">
        <div className="titulo">Dados da Região Sudeste</div>

        <div className="grafico">
          <h1>População estimada - 89 Milhões</h1>
          <GraficoPopulacao />
        </div>

        <div className="grafico">
          <h1>Número de Municípios - 1668</h1>
          <GraficoMunicipios />
        </div>
        
        
      </div>
    </div>
  )
}

export default App;
