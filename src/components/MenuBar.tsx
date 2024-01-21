'use client'
import { menuMobile } from '../store/chart/chartSlice';
import { useAppDispatch } from '../store/index';

export const MenuBar = () => {


    const dispatch = useAppDispatch()

    const toggleMenu = () => {
        //setMenuOpen(!isMenuOpen)
        dispatch(menuMobile())
    }
  return (
    <>
        <div className="sticky z-10 top-0 h-16 lg:py-2.5">
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                <button onClick={toggleMenu} className="w-12 h-16 -mr-2 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </>
  )
}
