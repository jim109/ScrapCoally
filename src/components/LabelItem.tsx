

interface Props {
    icon: React.ReactNode;
    data: string| number;
    title: string;
  }

export const LabelItem = ({icon, data, title}:Props) => {
  return (
    <div className="bg-orange-500 flex p-4 rounded-lg">
        <div className="flex items-center justify-center text-xl px-2 border rounded-lg mr-2">{ icon }</div>
        <div className="flex flex-col text-center">
            <h2 className="text-sm">{ title }</h2>
            <span>{ data }</span>
        </div>
    </div>
  )
}
 