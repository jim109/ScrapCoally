'use client'
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { initChartState } from '@/store/chart/chartSlice';
import api from '@/api';


export const Init = () => {


  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza la solicitud para obtener datos
        const {data} = await api.getAll();
        // Despacha la acción con los datos obtenidos
        dispatch(initChartState(data));
      } catch (error) {
        // Maneja errores de red u otros errores
        console.error('Error fetching data:', error);
      }
    };

    // Llama a la función para obtener datos
    fetchData();
  }, [dispatch]);

  return (
    <></>
  )
}
