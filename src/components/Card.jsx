import React, { useState } from 'react';

export default function Card({ url, title, image, description })
{
  const [ptr, setPtr] = useState('cursor-default');

  const onHover = () => 
  {
    if(url)
    {
      setPtr("cursor-pointer");
    }
  }

  const onLeave = () => 
  {
    setPtr("cursor-default");
  }

  return (
    <div 
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    onClick={(e)=>{window.location.href=url?url:"#";}}
    className={`${ptr} max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105`}>
      {image && <img className="w-full" src={image} alt="Card" />}
      <div className="p-4">
        {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};