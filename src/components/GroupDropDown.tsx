'use client'
import { DropdownButton } from "./DropdownButton"
import { useAppSelector } from '../store/index';

export const GroupDropDown = () => {

    const experience = useAppSelector(state => state.chart.experience)
    const role = useAppSelector(state => state.chart.role)

  return (
    <div className='flex gap-2 '>
        <DropdownButton name={'Experiencia'} options= { experience }/> 
        <DropdownButton name={'Role'} options= { role }/>
    </div>
  )
}
 