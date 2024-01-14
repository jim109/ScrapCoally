import { PieChart } from "./PieChart"

const label = ['Vacantes', 'Profesionales']

export const ChartVacantesProfesional = async() => {

    const { currentRecords, professionals } = await fetch('https://webscraping-4lkq.onrender.com/scraping/get-all-jobs',
                            { cache: 'force-cache'})
                            .then( res => res.json())

  return (
    <div className='shadow-lg rounded-md'>
        <PieChart label={ label } data1={ currentRecords } data2 ={professionals}/>
    </div>
  )
}
