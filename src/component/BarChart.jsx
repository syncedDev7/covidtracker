import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ chartData }) => {

  
  return (
    <div className="w-9/12 h-full mx-auto">
            <div className='h-full'>
                <Bar
                    className='h-full'
                    data={{
                        labels: [''],
                        datasets: [
                            {
                                label: "Deceased",
                                data: [chartData.deceased],
                                backgroundColor:'rgba(255, 99, 132, 0.5)',
                            },
                            {
                              label: 'Confirmed',
                              data: [chartData.confirmed],
                              backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            },
                            
                            {
                              label: 'Recovered',
                              data: [chartData.recovered],
                              backgroundColor: 'rgba(10, 241, 134, 0.5)',
                            },
                      
                            

                        ],
                    }}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            labels: {
                                fontSize: 15,
                            },
                        },
                    }}
                />
            </div>
        </div>
  );
};