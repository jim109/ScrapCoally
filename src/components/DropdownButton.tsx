'use client'
import { useState } from "react";

interface Props {
  name: string
}

export const DropdownButton = ({name}:Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }; 

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex justify-center w-24 px-2 text-xs font-normal text-indigo-950 border-2 border-indigo-950 rounded-sm hover:text-white hover:bg-indigo-950 focus:outline-none focus:ring focus:ring-indigo-500"
        onClick={toggleDropdown}
      >
        { name }
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 space-y-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
          {options.map((option, index) => (
            <div key={index} className="px-4 py-2">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



