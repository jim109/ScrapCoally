import { BarChart } from "./BarChart";

export const SalarioRolChart = () => {
    return (
        <div className="w-full md:w-1/2 pt-12 pr-6">
            <div className='flex justify-between items-center pb-6'>
                <h2 className='text-lg'>Salario / Role</h2>
            </div>
            <div className='shadow-lg rounded-lg'>
            <BarChart />
            </div>
         </div>

    )
}
