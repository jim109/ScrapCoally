'use client'
// Importa React, useState y useEffect desde la biblioteca 'react'
import React, { useState, useEffect } from 'react';

// Importa el componente 'Bar' desde 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';

// Importa elementos específicos de 'chart.js' y renómbralos para evitar conflictos de nombres
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registra los elementos de 'chart.js' para su uso con 'react-chartjs-2'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Definición del componente funcional 'BarChart'
const BarChart = () => {
  // Estado para almacenar los datos de la gráfica
  const [chartData, setChartData] = useState({
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Sales $',
        data: [1213, 132312, 423542, 12312, 12312, 312, 12312],
        borderColor: 'rgb(53,162,235)',
        backgroundColor: 'rgb(53,162,235,0.4)'
      }
    ]
  });

  // Estado para almacenar las opciones de la gráfica
  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Daily Revenue'
      }
    },
    maintainAspectRatio: false, // Esto permite ajustar el tamaño sin mantener la proporción original
    responsive: true,
    width: 400, // Ajusta el ancho de la gráfica según tus necesidades
    height: 200 // Ajusta la altura de la gráfica según tus necesidades
  });

  // Efecto secundario que se ejecuta una vez, al montar el componente
  useEffect(() => {
    // Actualiza el estado de 'chartData' con datos iniciales
    setChartData({
      labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Sales $',
          data: [1213, 132312, 423542, 12312, 12312, 312, 12312],
          borderColor: 'rgb(53,162,235)',
          backgroundColor: 'rgb(53,162,235,0.4)'
        }
      ]
    });

    // Actualiza el estado de 'chartOptions' con opciones iniciales
    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        }
      },
      maintainAspectRatio: false,
      responsive: true,
      width: 400,
      height: 200
    });
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar el componente

  // Devuelve el componente 'Bar' con los datos y opciones
  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

// Exporta el componente 'BarChart' para que pueda ser utilizado en otros archivos
export default ChartExamp;
