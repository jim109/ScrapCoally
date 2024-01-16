'use client'
import { DropdownButton } from "./DropdownButton"
import { useAppSelector, useAppDispatch } from '../store/index';
import { useEffect } from "react";
import { initChartState } from "@/store/chart/chartSlice";

interface Props {
  options: string[]
}

export const GroupDropDown = ({ options = [] }: Props) => {

    const experience = useAppSelector(state => state.chart.experience)
    const role = useAppSelector(state => state.chart.role)
    const dispatch = useAppDispatch()

    useEffect(() => {
      
      dispatch( initChartState(options) )
  
    }, [dispatch, options])
    

  return (
    <div className='flex gap-2 '>
        <DropdownButton name={'Experiencia'} options= { experience }/> 
        <DropdownButton name={'Role'} options= { role }/>
    </div>
  )
}
 