import { PieChart } from '@/components/PieChart';
import { BarChart } from '../../../components/BarChart';
import { DropdownButton } from '../../../components/DropdownButton';
import { SalarioRolChart } from '../../../components/SalarioRolChart'

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

      <div className="flex flex-wrap text-black">
        <SalarioRolChart  />
        <div className="w-full md:w-1/2 pt-12 pl-6">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Habilidades</h2>
                <div className='flex gap-2 '>
                    <DropdownButton name={'Experiencia'} /> 
                    <DropdownButton name={'Role'}/>
                </div>
            </div>
          <div className='shadow-lg rounded-lg'>
            <BarChart />
          </div>
        </div>
        <div className="w-full md:w-1/2 pt-16 pr-6">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Keywords</h2>
                <div className='flex gap-2 '>
                    <DropdownButton name={'Experiencia'} /> 
                    <DropdownButton name={'Role'}/>
                </div>
            </div>
          <div className='shadow-lg rounded-lg'>
            <BarChart />
          </div>
        </div>
        <div className="w-full md:w-1/2 pt-16 pl-6">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Ubicacion</h2>
                <div className='flex gap-2 '>
                    <DropdownButton name={'Role'} /> 
                    <DropdownButton name={'Ciudad'}/>
                </div>
            </div>
          <div className='shadow-lg rounded-lg'>
            <PieChart label={label} />
          </div>
        </div>
      </div>
    </div>
  );
}
