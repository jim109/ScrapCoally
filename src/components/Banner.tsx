'use client'

import api from '@/api';
import { LabelItem } from '@/components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCalendar, FaShoppingBag } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Banner = async () => {
  
    const { currentDateTime, currentRecords, professionals, totalUniqueCompanies } = await api.getBanner()
  
  return (
    <div className="flex gap-4 pt-8 justify-between">
        <LabelItem icon={<FaCalendar />} data={ currentDateTime } title={'Ultima Actualizacion'} />
        <LabelItem icon={<FaShoppingBag />} data={ currentRecords } title={'Registros Actuales'} />
        <LabelItem icon={<BsFillPersonFill />} data={professionals } title={'Profesionales'} />
        <LabelItem icon={<IoMail />} data={ totalUniqueCompanies } title={'Empresas'} />

  </div>
  )
}
