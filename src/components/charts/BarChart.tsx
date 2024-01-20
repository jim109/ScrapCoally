'use client'
interface DataItem {
  [key: string]: string | number;
}
interface Props {
  dataChart?: DataItem[] ;
}
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
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
        position: 'left' as const,
      },
      title: {
        display: false,
        text: 'Texto Titulo',
        position: 'bottom' as const,
      },
    },
    
  };
  
  const sample = [{ 
    "data": "Ventas",
    "cantidad": 100
},
{
    "data": "Costo",
    "cantidad": 70
}]
  
  export function BarChart({dataChart = sample}:Props) {

    if (!dataChart || dataChart.length === 0) {
      return <div>No hay datos para mostrar</div>;
    }

    const labels = dataChart.map((item) => Object.values(item)[0]) || [];

    const data = {
    
      labels,
      datasets: [
        {
          //label: 'Dataset 1',
          //data: labels.map(() => Math.floor(Math.random() * (100 - 0 + 1)) + 0),
          backgroundColor: [
            'rgba(120, 113, 108, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(249, 115, 22, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          data: dataChart?.map((item) => Object.values(item)[1]) || [],
        },
      ],
    };

    return <Bar options={options} data={data}  className='p-6'/>;
  }
  