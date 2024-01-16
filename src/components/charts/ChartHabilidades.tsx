import { BarChart } from "."
import { GroupDropDown } from "../GroupDropDown"

export const ChartHabilidades = async() => {

  // const { data } = await fetch('https://webscraping-4lkq.onrender.com/scraping/find-experience',
  // { cache: 'no-store'})
  // .then( res => res.json())

  // const role = data.map((item:string[]) => Object.values(item)[0])
  const { data } = await fetch('https://webscraping-4lkq.onrender.com/scraping/get-all-jobs',
  { cache: 'no-store'})
  .then( res => res.json())
  
  
  // Objeto para almacenar la frecuencia de cada habilidad
  const skillFrequency = {};
  
  // Recorre cada trabajo y cuenta la frecuencia de habilidades
  data.forEach(job => {
    const skills = job.requirement.skills || [];
    skills.forEach(skill => {
      // Convierte la habilidad a minúsculas para evitar diferencias de mayúsculas y minúsculas
      const lowercaseSkill = skill.toLowerCase();
  
      // Incrementa la frecuencia de la habilidad
      if (lowercaseSkill in skillFrequency) {
        skillFrequency[lowercaseSkill]++;
      } else {
        skillFrequency[lowercaseSkill] = 1;
      }
    });
  });
  
  // Convierte el objeto de frecuencia en un array de objetos
  const skillFrequencyArray = Object.keys(skillFrequency).map(skill => ({
    skill,
    cantidad: skillFrequency[skill],
  }));
  
  

  return (
    <div className=" pt-12">
      <div className='flex justify-between items-center pb-6'>
          <h2 className='text-lg'>Habilidades</h2>
          <GroupDropDown options= { ['1','2'] }  />
      </div>
    <div className='shadow-lg rounded-lg'>
      <BarChart dataChart= { skillFrequencyArray } />
    </div>
  </div>

  )
}
 