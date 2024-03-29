import React, { useState } from "react";
import axios from 'axios';


export default function Footer() {
    const [name,setName]=useState();
    const [phone,setPhone]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    const [subject,setSubject]=useState();
    const [message,setMessage]=useState();

    function verifyData(e) {
        e.preventDefault();
        // Check if any of the fields are empty
        if (!name || !phone || !email || !address || !subject || !message) {
          alert("Please fill in all fields");
          return;
        }
    
        // Send data to backend
        axios.post("http://localhost:8000/contactUs", {
          name: name,
          phone: phone,
          email: email,
          address: address,
          subject: subject,
          message: message
        })
        .then((res) => {
            setName('');
            setPhone('');
            setEmail('');
            setAddress('');
            setSubject('');
            setMessage('');
          if (res.data === true) {
            alert("Data Sent");
          } else {
            alert("Please try again later");
          }
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
          alert("An error occurred. Please try again later");
        });
      }
    

  return (
    <div className="grid grid-cols-1 mt-28 md:flex md:flex-row justify-around font-serif">
      <div>
        <h1 className="text-black  text-4xl">Contact US</h1><br/>
        <p>8XRH+79G mehsampur, Punjab, India</p><br/>
        <p>akshayraji.1412@gmail.com</p><br/>
        <p>09877365099</p>
        <div className="flex flex-row mt-10 gap-3">
        <a href="https://www.youtube.com/channel/UC173gJJePIydm4aT1iyxkSA" target="_blank">
        <img src="https://static.wixstatic.com/media/11062b_5f4e45b417034e48a0422fb4d97c4c2c~mv2.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_5f4e45b417034e48a0422fb4d97c4c2c~mv2.png" className="w-10"></img>
        </a>
        <a href="https://www.instagram.com/akshayraji13/" target="_blank">
        <img src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png" className="w-10"></img>
        </a>
        <a href="https://www.facebook.com/people/Radhey-Krishna-agro-industries/100090446825441/" target="_blank">
        <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_54,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png" className="w-10"></img>
        </a>
        
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col">
            <label >Name*</label>
            <input type="text" placeholder="Enter Your Name"  className="py-3 pr-4 pl-2 -ml-2 placeholder-black border-b border-transparent hover:border-gray-700 hover:border-l hover:border-r hover:border-t focus:border-gray-500" value={name} onChange={(v)=>{setName(v.target.value)}}/>
            <div className="w-44 h-[0.3px] bg-black"></div>
            {/* <hr className="border w-44 border-gray-700 hover:hidden"/> */}
          </div>
          <div className="flex flex-col">
            <label>Email*</label>
            <input type="email" placeholder="Enter Your Email" className="py-3 pr-4 pl-2 -ml-2 placeholder-black border border-transparent hover:border-gray-500 focus:border-gray-500"
             value={email}   onChange={(v)=>{setEmail(v.target.value)}}/>
            <div className="w-44 h-[0.3px] bg-black"></div>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col">
            <label>Phone*</label>
            <input type="text" placeholder="Enter Your Phone Number" className="py-3 pr-4 pl-2 -ml-2 placeholder-black border border-transparent hover:border-gray-500 focus:border-gray-500" value={phone} onChange={(v)=>{setPhone(v.target.value)}}/>
            <div className="w-44 h-[0.3px] bg-black"></div>
          </div>
          <div className="flex flex-col">
            <label>Address*</label>
            <input type="text" placeholder="Enter Your Address" className="py-3 pr-4 pl-2 -ml-2 placeholder-black border border-transparent hover:border-gray-500 focus:border-gray-500" value={address} onChange={(v)=>{setAddress(v.target.value)}}/>
            <div className="w-44 h-[0.3px] bg-black"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Subject*</label>
          <input type="text" placeholder="Type the Subject" className="py-3 pr-4 pl-2 -ml-2 placeholder-black border border-transparent hover:border-gray-500 focus:border-gray-500" value={subject} onChange={(v)=>{setSubject(v.target.value)}}/>
          <div className="w-96 h-[0.3px] bg-black"></div>
        </div>
        <div className="flex flex-col">
          <label>Message*</label>
          <input type="text" placeholder="Type Your Message here..." className="pt-3 pb-16 pr-4 pl-2 -ml-2 placeholder-black border border-transparent hover:border-gray-500 focus:border-gray-500" 
        value={message}   onChange={(v)=>{setMessage(v.target.value)}}/>
          <div className="w-96 h-[0.3px] bg-black mt-0"></div>
        </div>
        <div  className="mt-8  bg-black text-white  text-center hover:opacity-70 hover:cursor-pointer">
        <button className="w-96 px-2 py-3" onClick={verifyData}>Submit</button>
      </div>
      </div>
      
    </div>
  );
}
