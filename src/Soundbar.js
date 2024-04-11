import React, { useState } from 'react';
import Rectangle from './Rectangle';

const Soundbar = () => {
    const [volume, setVolume] = useState(50);

    const handleVolumeChange = (newValue) => {
      setVolume(newValue);
    };
  
  return (
    <div className="flex justify-start items-center p-6 mt-14">
    <Rectangle value={volume} onChange={handleVolumeChange} />
  </div>
  )
}

export default Soundbar