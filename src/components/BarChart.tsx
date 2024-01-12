'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'left' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  
  export const data = {
    labels,
    datasets: [
      {
        //label: 'Dataset 1',
        data: labels.map(() => Math.floor(Math.random() * (100 - 0 + 1)) + 0),
        //backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };
  
  export function BarChart() {
    return <Bar options={options} data={data}  className='p-6'/>;
  }
  