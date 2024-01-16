import { Sidebar } from '../../components';


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto lg:w-[80%] xl:w-[80%] 2xl:w-[85%] min-h-screen ">

        <div className=" bg-gray-50 pb-20 min-h-screen">
          { children }
        </div>
      </div>
    </>
  );
} 