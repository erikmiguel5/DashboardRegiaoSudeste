import React from 'react'
import { Bar } from 'react-chartjs-2'

const GraficoMaiorCidade = () => {
  return (
    <div>
        <Bar
            data={{
                labels: ['Belo Horizonte', 'São Pulo', 'Vitória', 'Rio de Janeiro'],
                datasets: [
                    {
                    label: 'Quantidade Estimada de Habitantes',
                    data: [2521564, 12325232, 6747815, 2521564],
                    backgroundColor: [
                        'rgba(30,144,255, 0.5)',
                        

                    ],
                    borderColor: [
                        'rgba(30,144,255, 1)',
                        
                    ],
                    borderWidth: 2,

                    },

                ],
                }}
                height={400}
                width={800}
                options={{
                  maintainAspectRatio: false,
                  Element:{
                    Bar:{
                        borderSkipped:'left',
                    }
                  },
                  plugins: {
                    legend: {
                        align: 'center',
                        position: 'top',
                        labels:{
                            font: {
                                size: 20
                            }
                        }
                        
                    }
                }
            }}
        />
    </div>
  )
}

export default GraficoMaiorCidade