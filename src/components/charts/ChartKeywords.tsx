import { BarChart } from "."
import { GroupDropDown } from "../GroupDropDown"

export const ChartKeywords = async() => {

  const { data } = await fetch('https://webscraping-4lkq.onrender.com/scraping/get-all-jobs',
  { cache: 'no-store'})
  .then( res => res.json())

// Objeto para almacenar la frecuencia de cada habilidad
const skillFrequency = {};

// Recorre cada trabajo y cuenta la frecuencia de habilidades
data.forEach(job => {
  const skills = job.keyword || [];
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
    frequency: skillFrequency[keyword],
  }))
  // Ordena el array en función de la frecuencia de habilidades de mayor a menor
  .sort((a, b) => b.frequency - a.frequency)
  // Toma los primeros 20 elementos
  .slice(0, 20);


  
  return (
    <div className=" pt-16">
      <div className='flex justify-between items-center pb-6'>
          <h2 className='text-lg'>Keywords</h2>
          <GroupDropDown options= { ['1','2'] }/>
      </div>
    <div className='shadow-lg rounded-lg'>
      <BarChart dataChart= { skillFrequencyArray } />
    </div>
  </div>
  )
}
