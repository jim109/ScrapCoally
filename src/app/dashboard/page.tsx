import { Banner } from '@/components/Banner';

export const metadata = {
  title: 'Dashboard Holberton - Coally',
  description: 'Dashboard',
 };

export default function Home() {
  return (
    <div className="px-10 lg:px-20 text-white">
      <div className="flex border-t-2 pt-4">
        <h1 className='text-xl font-bold text-indigo-950 mr-6'>Dashboard Holberton - Coally</h1>
        <button className="px-10 bg-indigo-950 rounded-md">Actualizar informacion</button>
      </div>
      <Banner />
    </div>
  )
}
