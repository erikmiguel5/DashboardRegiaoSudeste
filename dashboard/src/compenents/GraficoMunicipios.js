import React from 'react'
import { Bar } from 'react-chartjs-2'

const GraficoMunicipios = () => {
  return (
    <div>
        <Bar
            data={{
                labels: ['Mg - 51.14%', 'Sp - 38.67%', 'ES - 4.68%', 'RJ - 5.52%'],
                datasets: [
                    {
                    label: 'Quantidade de Municípios',
                    data: [853, 645, 78, 92],
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

export default GraficoMunicipios