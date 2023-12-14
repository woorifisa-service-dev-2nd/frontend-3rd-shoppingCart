import React from 'react';


const CustomNumberInput = ({value, decrement, increment}) => {
  

  return (
    <div className="custom-number-input h-10 w-32">
      <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={decrement}
          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          className=" focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number" readOnly
          value={value}
        />
        <button
          onClick={increment}
          className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CustomNumberInput;