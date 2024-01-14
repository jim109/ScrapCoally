import { LabelItem } from '@/components';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaCalendar, FaShoppingBag } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const Banner = async () => {

    const { totalCompanies } = await fetch('https://webscraping-4lkq.onrender.com/scraping/find-by-company',
                              {cache: 'force-cache'})
                              .then(res => res.json())

    const { currentDateTime, currentRecords, professionals } = await fetch('https://webscraping-4lkq.onrender.com/scraping/get-all-jobs',
                            { cache: 'force-cache'})
                            .then( res => res.json())

  return (
    <div className="flex gap-4 pt-8 justify-between">
        <LabelItem icon={<FaCalendar />} data={ currentDateTime } title={'Ultima Actualizacion'} />
        <LabelItem icon={<FaShoppingBag />} data={ currentRecords } title={'Registros Actuales'} />
        <LabelItem icon={<BsFillPersonFill />} data={professionals } title={'Profesionales'} />
        <LabelItem icon={<IoMail />} data={ totalCompanies } title={'Empresas'} />
  </div>
  )
}
