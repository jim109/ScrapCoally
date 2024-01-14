import { Banner } from '@/components/Banner';
import { ChartProfesionalesEmpresas } from '../../components/ChartProfesionalesEmpresas';
import { ChartVacantesProfesional } from '../../components/ChartVacantesProfesional';

export const metadata = {
  title: 'Dashboard Holberton - Coally',
  description: 'Dashboard',
 };

const label = ['Vacantes', 'Profesionales']

export default function Home() {
  return (
    <div className="px-20 text-white">
      <div className="py-10">
        
      </div>
      <div className="flex border-t-2 pt-4">
        <h1 className='text-xl font-bold text-indigo-950 mr-6'>Dashboard Holberton - Coally</h1>
        <button className="px-10 bg-indigo-950 rounded-md">Actualizar informacion</button>
      </div>
      <Banner />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-16 '>
        <ChartVacantesProfesional />
        <ChartProfesionalesEmpresas />
      </div>

    </div>
  )
}
