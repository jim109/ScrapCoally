import { PieChart } from "."
import { AllJobsResponse } from '../../api/scrapingApi';

interface ProfesionalEmpresas {
  professionals: number | string,
  totalCompanies: number | string,
 }
const label = ['Profesionales', 'Empresas']

export const ChartProfesionalesEmpresas = ({professionals, totalCompanies}:ProfesionalEmpresas) => {

  return (
    <div className='shadow-lg rounded-md'>
        <PieChart label={label} data1={professionals} data2 ={totalCompanies}/>
    </div>
  )
}
