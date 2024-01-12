import { LabelItem } from '@/components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCalendar, FaShoppingBag } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PieChart } from '../../components/PieChart';

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
      <div className="flex gap-4 pt-8 justify-between ">
        <LabelItem icon={<FaCalendar />} data={'10/10/2023'} title={'Ultima Actualizacion'} />
        <LabelItem icon={<FaShoppingBag />} data={'1500'} title={'Registros Actuales'} />
        <LabelItem icon={<BsFillPersonFill />} data={'450'} title={'Profesionales'} />
        <LabelItem icon={<IoMail />} data={'93'} title={'Empresas'} />
      </div>

      <div className='flex justify-between pt-12'>
        <div className='shadow-lg p-6 rounded-md'>
          <PieChart label={label} />
        </div>
        <div className='shadow-lg p-6 rounded-md'>
          <PieChart label={label} />
        </div>

      </div>

    </div>
  )
}
