import { MenuBar } from '@/components/MenuBar';
import { Sidebar } from '../../components';


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      {/* <div className="ml-auto lg:w-[80%] xl:w-[80%] 2xl:w-[85%] min-h-screen "> */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-gray-50">
        <MenuBar />
        <div className="pb-20 min-h-screen">
          { children }
        </div>
      </div>
    </>
  );
} 