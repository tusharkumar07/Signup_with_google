import React, { useState } from 'react';
import adventureImg from "../aboutpage/backImage.jpg";

export default function Compb() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showLessContent, setShowLessContent] = useState(false);

  // Function to toggle showFullContent state
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
    setShowLessContent(false);
  };

  // Function to toggle showLessContent state
  const toggleLessContent = () => {
    setShowLessContent(!showLessContent);
    setShowFullContent(false); // Ensure full content is hidden when showing less content
  };

  // Function to split the content into an array of words and return the first 75 words
  const truncateContent = (content) => {
    const words = content.split(' ');
    const truncatedContent = words.slice(0, 75).join(' ');
    return truncatedContent;
  };

  return (
    <div className="relative mt-[2rem] flex items-center justify-center bg-cover bg-center pt-32 pb-4" style={{ backgroundImage: `url(${adventureImg})` }}>
      <div className="text-center text-black bg-white w-[40rem] px-24 py-16 font-serif">
        <h1 className="text-2xl md:text-5xl font-normal mb-4">About Us</h1>
        <p className="text-lg text-left">
          {showFullContent ? (
            // If showFullContent is true, show full content
            "Welcome to our silage bales manufacturing page! We are a dedicated team of agriculture experts, committed to providing high-quality silage bales to farmers across the country.Our silage bales are manufactured using only the highest quality forage crops, carefully harvested at the optimal stage of maturity to ensure maximum nutrient content. We use state-of-the-art equipment to chop and pack the forage into airtight bags, which are then sealed to promote fermentation and preserve the feed.We understand the importance of providing quality feed to livestock farmers, which is why we take great care in every step of the manufacturing process. From selecting the right crop to packaging and sealing the bags, our team is committed to producing the best silage bales on the market. Our silage bales are perfect for dairy and beef cattle, as well as sheep, goats, and other livestock. We offer bales in convenient 100kg sizes, making it easy for farmers to transport and store the feed.In addition to our commitment to quality, we also prioritize customer service. We work closely with our clients to understand their specific needs and provide personalized solutions that meet their requirements. Our goal is to build lasting relationships with our customers, providing them with a reliable source of high-quality feed that supports the health and productivity of their animals.Thank you for considering our silage bales for your livestock feed needs. We look forward to serving you and your animals!"
          ) : (
            // If showFullContent is false, show truncated content
            showLessContent ? (
              // If showLessContent is true, show first 75 words
              truncateContent("Welcome to our silage bales manufacturing page! We are a dedicated team of agriculture experts, committed to providing high-quality silage bales to farmers across the country. Our silage bales are manufactured using only the highest quality forage crops, carefully harvested at the optimal stage of maturity to ensure maximum nutrient content. We use state-of-the-art equipment to chop and pack the forage into airtight bags, which are then sealed to promote fermentation and preserve the feed. We understand the importance of providing quality feed to livestock farmers, which is why we take great care in every step of the manufacturing process.")
            ) : (
              // If neither showFullContent nor showLessContent is true, show Learn More button
              "Welcome to our silage bales manufacturing page! We are a dedicated team of agriculture experts, committed to providing high-quality silage bales to farmers across the country."
            )
          )}
        </p>
        {!showFullContent && !showLessContent && (
          <button className='bg-slate-900 text-white mt-4 px-8 py-2 hover:opacity-60' onClick={toggleContent}>Learn More</button>
        )}
        {(showFullContent || showLessContent) && (
          <button className='bg-slate-900 text-white mt-4 px-8 py-2 hover:opacity-60' onClick={toggleLessContent}>Learn Less</button>
        )}
      </div>
    </div>
  );
}
