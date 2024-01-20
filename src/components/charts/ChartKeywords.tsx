'use client'
import { BarChart } from "."
import { GroupDropDown } from "../GroupDropDown"
import { useGetAllJobsQuery } from '@/api/scrapingApi';

interface SkillFrequency {
  [key: string]: number;
}
interface Item {
  keyword?: string[];
}

export const ChartKeywords = () => {

  const { data = [], isLoading} = useGetAllJobsQuery(null)

  if (isLoading ) {
    <div className=" pt-16">
        <div className='flex justify-between items-center pb-6'>
            <h2 className='text-lg'>Keywords</h2>
            <GroupDropDown  />
        </div>
      <div className='shadow-lg rounded-lg'>
       
      </div>
    </div>
  }

  const jobsData = data?.data || []
    //Objeto para almacenar la frecuencia de cada habilidad
    const skillFrequency: SkillFrequency = {};
      
    // Recorre cada trabajo y cuenta la frecuencia de habilidades
    jobsData.forEach((item: Item) => {
      const skills = item.keyword || [];
      skills.forEach(keyword => {
        // Convierte la habilidad a minúsculas para evitar diferencias de mayúsculas y minúsculas
        const lowercaseSkill = keyword.toLowerCase();
    
        // Incrementa la frecuencia de la habilidad
        if (lowercaseSkill in skillFrequency) {
          skillFrequency[lowercaseSkill]++;
        } else {
          skillFrequency[lowercaseSkill] = 1;
        }
      });
    });
    
    // Convierte el objeto de frecuencia en un array de objetos
    const skillFrequencyArray = Object.keys(skillFrequency)
      .map(keyword => ({
        keyword,
        cantidad: skillFrequency[keyword],
      }))
      // Ordena el array en función de la frecuencia de habilidades de mayor a menor
      .sort((a, b) => b.cantidad - a.cantidad)
      // Toma los primeros 20 elementos
      .slice(0, 20);
  
  return (
    <div className=" pt-16">
      <div className='flex justify-between items-center pb-6'>
          <h2 className='text-lg'>Keywords</h2>
          <GroupDropDown  />
      </div>
    <div className='shadow-lg rounded-lg'>
      <BarChart dataChart= { skillFrequencyArray } />
    </div>
  </div>
  )
}
