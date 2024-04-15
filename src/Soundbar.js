import React, { useState } from 'react';
import Rectangle from './Rectangle';

const Soundbar = () => {

  const [volume, setVolume] = useState(50);
  const [color, setColor] = useState('yellow');  

  const handleVolumeChange = (newValue) => {
    setVolume(newValue);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (

    <div className="flex flex-col justify-start items-center p-6 mt-14">

      <Rectangle value={volume} onChange={handleVolumeChange} color={color} />

      <div className="mt-4">
        <label htmlFor="colorPicker">Choose a color: </label>

        <input

          id="colorPicker"
          type="color"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
          className="cursor-pointer"
        />

      </div>
    </div>
  );
}

export default Soundbar;
