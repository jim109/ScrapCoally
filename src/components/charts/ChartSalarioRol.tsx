'use client'
import { BarChart } from './BarChart';
import { useGetExperienceJobsQuery } from '@/api/scrapingApi';

export const ChartSalarioRol = () => {

    const {  data = [] } = useGetExperienceJobsQuery(null);

    return (
        <div className="pt-12 text-black">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Role / Vacantes</h2>
            </div>
            <div className='shadow-lg rounded-lg'>
            <BarChart dataChart= { data.data } /> 
            </div> 
         </div>

    )
}
