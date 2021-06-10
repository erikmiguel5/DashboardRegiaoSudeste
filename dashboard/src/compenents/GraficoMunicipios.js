import React from 'react'
import { Pie } from 'react-chartjs-2'

const GraficoMunicipios = () => {
  return (
    <div>
        <Pie
            data={{
                labels: ['Mg', 'Sp', 'ES', 'RJ'],
                datasets: [
                    {
                    label: 'Quantidade de Municípios',
                    data: [853, 645, 78, 92],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,

                    },
                ],
                }}
                height={400}
                width={800}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                        labels:{
                            font: {
                                size: 25
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