import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className='flex flex-col justify-center font-serif'>
    <div className='flex justify-center items-center text-center mt-12 text-4xl font-serif'>
      SHREE RADHEY KRISHNA AGRO INDUSTRIES
    </div>
    <hr className="border my-6 w-1/2 mx-auto border-gray-700"/>
    <div className='flex flex-row gap-6 justify-center items-center'>
        <h2><Link to="/home">Home</Link></h2>
        <h2><Link to="/about">About</Link></h2>
    </div>
  </div>
  )
}
