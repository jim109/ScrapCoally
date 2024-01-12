'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title}: Props) => {
  const pathName = usePathname();

  return ( 
    <li className={`transition rounded-l-full hover:bg-orange-500 hover:text-white
                  ${ path === pathName ? 'bg-white text-indigo-950 ' 
                    : 'bg-indigo-950 text-white'} `}>
      <Link href={path} className='pl-4 py-3 flex items-center space-x-4 rounded-l-full'>
        <div className='text-xl'>
          { icon }
        </div>
        <span >{ title }</span>
      </Link>
    </li>
  );
};
