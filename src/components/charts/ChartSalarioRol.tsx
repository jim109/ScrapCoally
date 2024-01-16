import { BarChart } from './BarChart';

export const ChartSalarioRol = async() => {

    const { data } = await fetch('https://webscraping-4lkq.onrender.com/scraping/find-experience',{
        next: { revalidate: 10 },})
    .then( res => res.json())

    return (
        <div className="pt-12 text-black">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Role / Vacantes</h2>
            </div>
            <div className='shadow-lg rounded-lg'>
            <BarChart dataChart= { data } />
            </div>
         </div>

    )
}
