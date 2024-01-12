'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export function PieChart({label}) {

ChartJS.register(ArcElement, Tooltip, Legend);

// Define las opciones para el gráfico
const options = {
    responsive: false,
    maintainAspectRatio: false, // Esto permite ajustar el tamaño sin mantener la proporción original
    aspectRatio: 1, // Ajusta el aspect ratio según tus necesidades
  };

 const data = {
//   labels: ['Vacantes', 'Perfiles de profesionales'],
    labels: label,
  datasets: [
    {
      label: '# of Votes',
      data: [50, 50],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(120, 113, 108, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)',
        'rgba(120, 113, 108, 0.2)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


  return <Pie data={data} options={options} />;
}
