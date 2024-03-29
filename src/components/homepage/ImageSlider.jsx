import React, { useState, useEffect } from 'react';

const images = [
  'https://static.wixstatic.com/media/06568c_6db658cde6f845998b983cc1d4554286~mv2.jpg/v1/fill/w_1075,h_595,al_c,q_85,enc_auto/06568c_6db658cde6f845998b983cc1d4554286~mv2.jpg',
  'https://static.wixstatic.com/media/06568c_2aa176a6003842bbbe63fd57de02fb36~mv2.jpg/v1/fill/w_1293,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/06568c_2aa176a6003842bbbe63fd57de02fb36~mv2.jpg',
  'https://static.wixstatic.com/media/06568c_8c3360a3048d491abd9cb2db8992be89~mv2.jpg/v1/fill/w_648,h_358,al_c,lg_1,q_80,enc_auto/06568c_8c3360a3048d491abd9cb2db8992be89~mv2.jpg',
  'https://static.wixstatic.com/media/06568c_cba9473549614beb980f2760be2d16d7~mv2.jpg/v1/fill/w_600,h_332,al_c,lg_1,q_80,enc_auto/06568c_cba9473549614beb980f2760be2d16d7~mv2.jpg',
];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Set timeout to change the image after 3 seconds
    const interval = setInterval(nextImage, 3000);

    // Clear the interval when component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentImageIndex]); // Run effect whenever currentImageIndex changes

  return (
    <div className="relative w-4/6 h-[35rem]">
    <h1>Hello</h1>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}
