import { PieChart } from '@/components/charts/PieChart';
import { BarChart } from '../../../components/charts/BarChart';
import { ChartSalarioRol } from '../../../components/charts/ChartSalarioRol'
import { GroupDropDown } from '@/components/GroupDropDown';
import { GroupDropDownRoleCiudad } from '../../../components/GroupDropDownRoleCiudad';
import { ChartHabilidades, ChartKeywords } from '@/components/charts';

export const metadata = {
 title: 'Profesional Holberton - Coally',
 description: 'Profesional Holberton - Coally',
};
 
const label = ['Vacantes', 'Profesionales']

export default function ChartsPage() {
  return (
    <div className="px-20">
      <div className="py-10">
        
      </div>
      <div className="flex border-t-2 pt-4 pb-6">
        <h1 className="text-xl font-bold text-indigo-950 mr-6">Profesional Holberton - Coally</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 text-black gap-x-10">
        <ChartSalarioRol  />
        <ChartHabilidades />
        <ChartKeywords />
        <div className="pt-16">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Ubicacion</h2>
                <GroupDropDownRoleCiudad />
            </div>
          <div className='shadow-lg rounded-lg'>
            <PieChart label={label} />
          </div>
        </div>
      </div>
    </div>
  );
}
