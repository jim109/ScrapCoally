import api from "@/api"
import { BarChart } from "."
import { GroupDropDown } from "../GroupDropDown"

export const ChartKeywords = async() => {

  const skillFrequencyArray = await api.getKeywords()
   
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
