import React from 'react';

const Rectangle = ({ value, onChange }) => {
  return (
    <div className="flex items-center">
      <div className="relative w-[300px] h-4 bg-yellow-400">
        <div className="absolute top-0 left-0 h-full bg-red-500" style={{ width: `${value}%` }}></div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"

          
        />
      </div>
      
      <div className="ml-2 font-bold">{`${Math.round(value)}%`}</div>

      <div>

      </div>
    </div>
   
  );
};

export default Rectangle;
