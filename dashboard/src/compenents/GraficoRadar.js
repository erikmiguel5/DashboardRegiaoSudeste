import React from 'react'
import { PolarArea } from 'react-chartjs-2'

const GraficoRadar = () => {
  return (
    <div>
        <PolarArea
            data = {{
                labels: [
                  'Minas Gerais',
                  'São Paulo',
                  'Rio de Janeiro',
                  'Espírito Santo',
                  
                ],
                datasets: [{
                    label: 'Média de Habitantes por Cidade',
                    data: [24962, 171766, 52103, 188762],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(75, 192, 192)',
                      'rgb(255, 205, 86)',
                      'rgb(201, 203, 207)',
                      'rgb(54, 162, 235)'
                     ],
                }],
            }}
            height={400}
            width={800}
        />
    </div>
  )
}

export default GraficoRadar