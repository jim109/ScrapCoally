'use client'
import { BarChart } from './BarChart';
import { useGetExperienceJobsQuery } from '@/api/scrapingApi';
import { AllJobsResponse, Experience } from '../../api/scrapingApi';

interface ApiResponse {
    success: boolean;
    data: RoleItem[];
  }
  
  interface RoleItem {
    [key: string]: string | number;
    role: string;
    cantidad: number;
  }

export const ChartSalarioRol = () => {

    const {  data = [], isLoading } = useGetExperienceJobsQuery(null);

    if ( isLoading ) {
        return(
            <div className="pt-12 text-black">
                <div className='flex justify-between items-center pb-6'>
                    <h2 className='text-lg'>Role / Vacantes</h2>
                </div>
                <div className='shadow-lg rounded-lg'>
            
                </div> 
            </div>
        )
    }

    return (
        <div className="pt-12 text-black">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Role / Vacantes</h2>
            </div>
            <div className='shadow-lg rounded-lg'>
            <BarChart dataChart= { (data as ApiResponse ).data } /> 
            </div> 
         </div>

    )
} 
