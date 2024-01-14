import { BarChart } from './BarChart';



export const SalarioRolChart = async() => {

    const { data } = await fetch('https://webscraping-4lkq.onrender.com/scraping/find-experience',
    { cache: 'force-cache'})
    .then( res => res.json())

    return (
        <div className="w-full md:w-1/2 pt-12 pr-6 text-black">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Role / Vacantes</h2>
            </div>
            <div className='shadow-lg rounded-lg'>
            <BarChart dataChart= { data } />
            </div>
         </div>

    )
}
