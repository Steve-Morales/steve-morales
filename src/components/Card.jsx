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
    className={`${ptr} max-w-xs mx-auto bg-gray-800 border border-gray-700 shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-600`}>
      {image && <img className="w-full" src={image} alt="Card" loading="lazy" />}
      <div className="p-4">
        {title && <h2 className="text-xl font-bold text-white mb-2">{title}</h2>}
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  );
};