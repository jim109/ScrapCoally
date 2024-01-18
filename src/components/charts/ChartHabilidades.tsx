import api from "@/api";
import { BarChart } from "."
import { GroupDropDown } from "../GroupDropDown"

export const ChartHabilidades = async() => {

  const skillFrequencyArray = await api.getFrecuency()

  return (
    <div className=" pt-12">
      <div className='flex justify-between items-center pb-6'>
          <h2 className='text-lg'>Habilidades</h2>
          <GroupDropDown options= { ['Junior','SemiSenior', 'Senior'] }  />
      </div>
    <div className='shadow-lg rounded-lg'>
      <BarChart dataChart= { skillFrequencyArray } />
    </div>
  </div>

  )
}
 