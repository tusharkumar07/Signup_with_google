import React from 'react';
import Header from './Header';
import Compa from './homepage/Compa';
import Footer from './homepage/Footer';
import Address from './homepage/Address';
import ImageSlider from './homepage/ImageSlider';


export default function Home() {
  return (
    <div>
        <Header/>
        <div className='flex flex-col justify-center items-center'>
            <Compa/>
            <p className='mt-6 mb-12 text-xl font-serif'>Your Premium Provider</p>
            <ImageSlider/>
            
        </div>
        <Footer/>
        <Address/>
        
    </div>
  )
}
