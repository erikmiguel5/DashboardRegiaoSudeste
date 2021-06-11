import React from 'react'

import GraficoPopulacao from './compenents/GraficoPopulacao'
import GraficoMunicipios from './compenents/GraficoMunicipios'
import GraficoRadar from './compenents/GraficoRadar'
import GraficoMaiorCidade from './compenents/GraficoMaiorCidade'





import './App.css';

const App = () => {

  return (
    <div>
      <div className="container">
        <div className="titulo">Dados da Região Sudeste</div>

      <div className="grafico-content">
          <div className="grafico">
            <h1>População Estimada - 89 Milhões</h1>
            <GraficoPopulacao />
          </div>

          <div className="grafico">
            <h1>Número de Municípios - 1668</h1>
            <GraficoMunicipios />
          </div>
          
          <div className="grafico">
            <h1>Habitantes Estimados na Capital</h1>
            <GraficoMaiorCidade />
          </div>

          <div className="grafico">
          <h1>Relação Habitantes por Cidade</h1>
            <GraficoRadar />
          </div>

          
          

        </div>
      </div>
    </div>
  )
}

export default App;
