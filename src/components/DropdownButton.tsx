'use client'
import { useState } from "react";

interface Props {
  name: string
  options: string[]
}


export const DropdownButton = ({name, options}:Props) => {

  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);
    console.log(`Selected ${name}: ${selectedOption}`);
  };

  return (
    <div className="relative inline-block">
      <select className="inline-flex justify-center w-24 px-2 text-xs font-normal text-indigo-950 border-2 border-indigo-950 rounded-sm hover:text-white hover:bg-indigo-950 focus:outline-none focus:ring focus:ring-indigo-500"
              onChange={ handleChange }
              value={ selectedValue }
      >
        <option value="">{ name }</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};





