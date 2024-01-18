'use client'
import { DropdownButton } from "./DropdownButton"
import { useAppSelector } from '../store/index';

export const GroupDropDownRoleCiudad = () => {

    const role = useAppSelector(state => state.chart.role)
    const ciudad = useAppSelector( state => state.chart.ciudad)

    
  return (
    <div className='flex gap-2 '>
      <DropdownButton name={'Role'} options= { role }/> 
      <DropdownButton name={'Ciudad'} options= { ciudad }/>
  </div>
  )
}
