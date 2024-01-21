

interface Props {
    icon: React.ReactNode;
    data: string| number;
    title: string;
  }

export const LabelItem = ({icon, data, title}:Props) => {
  return (
    <div className="bg-orange-500 flex px-3 py-5 xl:px-6 rounded-lg">
        <div className="flex  items-center justify-center px-2 xl:px-2 border rounded-lg mr-1 xl:mr-2">
          { icon }
        </div>
        <div className="flex flex-col text-center">
            <h2 className=" flex text-center text-xs xl:text-lg">{ title }</h2>
            <span className="text-xs xl:text-lg">{ data }</span>
        </div>
    </div>
  )
}
 