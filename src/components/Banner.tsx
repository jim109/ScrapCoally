'use client'
import { LabelItem } from '@/components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCalendar, FaShoppingBag } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ChartProfesionalesEmpresas, ChartVacantesProfesional } from './charts';
import { useGetAllJobsQuery, AllJobs } from '@/api/scrapingApi';

export const Banner = () => {
  
  //const { totalUniqueCompanies } = useAppSelector((state) => state.chart.dashboard)

  const { data: dataJobs, isLoading } = useGetAllJobsQuery(null)
    
  if (isLoading) {
    return (
      <div className='text-violet-950'>Loading ....</div>
    )
  }

  const alljobs = dataJobs as AllJobs 
  
  return (
    <>  
      <div className="flex gap-4 pt-8 justify-between">
        <LabelItem icon={<FaCalendar />} data={ alljobs.currentDateTime } title={'Ultima Actualizacion'} />
        <LabelItem icon={<FaShoppingBag />} data={ alljobs.currentRecords } title={'Registros Actuales'} />
        <LabelItem icon={<BsFillPersonFill />} data={ alljobs.professionals } title={'Profesionales'} />
        <LabelItem icon={<IoMail />} data={ 11 } title={'Empresas'} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-16 '>
          <ChartVacantesProfesional professionals={alljobs.professionals} currentRecords={alljobs.currentRecords}/>
          <ChartProfesionalesEmpresas totalCompanies={11} professionals={alljobs.professionals} />
      </div>
    </>
  )
}
