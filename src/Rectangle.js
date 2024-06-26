import React from 'react';



const Rectangle = ({ value, onChange, color }) => {

  return (
    <div className="flex items-center">

      <div className="relative w-[300px] h-4 bg-gray-200">

        <div
          className="absolute top-0 left-0 h-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>

        <div
          className="absolute top-1/2 -translate-y-1/2 cursor-pointer"
          style={{
            left: `${value}%`,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'rgb(239 68 68)',
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

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
            <div className='ml-2 font-bold flex flex-col bg-red-600 md:flex-col-2 w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer md:w-1/2 md:h-1/2 md:top-0 md:left-0 md:opacity-0 lg:w-3 lg:h-3 lg:top-0 lg:left-0 lg:opacity-0 '>
           <h1>
           {`${Math.round (value)}%`} Click here!
            </h1>

            

            </div>  

    </div>
  );
};

export default Rectangle;
