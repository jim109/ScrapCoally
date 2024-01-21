import { PieChart } from "./"

interface ProfesionalVancante {
  professionals: number | string,
  currentRecords: number | string,
 }

const label = ['Vacantes', 'Profesionales']

export const ChartVacantesProfesional = ({currentRecords, professionals}: ProfesionalVancante) => {


  return (
    <div className='shadow-lg rounded-md'>
        <PieChart label={ label } data1={ currentRecords } data2 ={professionals}/>
    </div>
  )
}
