import React, { useLayoutEffect } from 'react'
import { Pie } from 'react-chartjs-2'

const GraficoPopulacao = () => {
  return (
    <div>
        <Pie
            data={{
                labels: ['Mg - 23.92%', 'Sp - 52.00%', 'ES - 4.57%', 'RJ - 19.51%'],
                datasets: [
                    {
                    label: 'População Estimada por Estado',
                    data: [21292666, 46289333, 4064052, 17366189],
                    backgroundColor: [
                        'rgba(30,144,255, 0.5)',
                        'rgba(60,179,113, 0.5)',
                        'rgba(220,20,60, 0.5)',
                        'rgba(255,215,0, 0.5)',

                    ],
                    borderColor: [
                        'rgba(30,144,255, 1)',
                        'rgba(60,179,113, 1)',
                        'rgba(220,20,60, 1)',
                        'rgba(255,215,0, 1)',
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
                            position: 'left',
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

export default GraficoPopulacao