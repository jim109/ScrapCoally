import { PieChart } from "."


const label = ['Profesionales', 'Empresas']

export const ChartProfesionalesEmpresas = async() => {


    const { totalCompanies } = await fetch('https://webscraping-4lkq.onrender.com/scraping/find-by-company',
                              {cache: 'no-store'})
                              .then(res => res.json())

    const { professionals } = await fetch('https://webscraping-4lkq.onrender.com/scraping/get-all-jobs',
                            { cache: 'no-store'})
                            .then( res => res.json())

  return (
    <div className='shadow-lg rounded-md'>
        <PieChart label={label} data1={professionals} data2 ={totalCompanies}/>
    </div>
  )
}
