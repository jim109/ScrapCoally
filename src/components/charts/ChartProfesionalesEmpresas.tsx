import { PieChart } from "."

const label = ['Profesionales', 'Empresas']

export const ChartProfesionalesEmpresas = ({professionals, totalCompanies}) => {

  return (
    <div className='shadow-lg rounded-md'>
        <PieChart label={label} data1={professionals} data2 ={totalCompanies}/>
    </div>
  )
}
