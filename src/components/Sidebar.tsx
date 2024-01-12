import Link from "next/link";
import { SidebarItem } from "./SidebarItem"
import { CiLogout } from 'react-icons/ci';
import { BsHouse, BsGraphUpArrow } from 'react-icons/bs'

import Image from "next/image";

const menuItem = [
  {
    icon: <BsHouse />,
    title: 'Emprendimiento',
    path: '/dashboard'
  },
  {
    icon: <BsGraphUpArrow />,
    title: 'Graficas',
    path: '/dashboard/charts'
  },

]

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-10 pl-8 w-full flex flex-col justify-between 
                      h-screen bg-indigo-950 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[20%] 
                      xl:w-[20%] 2xl:w-[15%]">
        <div>
        <div className="-mx-6 px-6 pt-20 pb-4">
            <Link href="/dashboard" title="home">
              <Image src="/Logo-Coally-Blanco.png" width={175} height={56} alt="Coally logo"/>
            </Link>
        </div>
        <ul className="space-y-2  mt-8"> 
          {
            menuItem.map( menu => ( 
              <SidebarItem key={menu.title} icon={menu.icon} title={menu.title} path={menu.path} />
            ))
          }
        </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-white hover:text-orange-500 ">
            <CiLogout />
            <span className="hover:text-orange-500">Cerrar sesion</span>
        </button>
        </div>
    </aside>
  )
}
