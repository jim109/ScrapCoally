import { PieChart } from "./"

const label = ['Vacantes', 'Profesionales']

export const ChartVacantesProfesional = ({currentRecords, professionals}) => {


  return (
    <div className='shadow-lg rounded-md'>
        <PieChart label={ label } data1={ currentRecords } data2 ={professionals}/>
    </div>
  )
}
