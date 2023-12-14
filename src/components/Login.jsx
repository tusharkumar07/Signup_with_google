// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import GoogleLogin from './GoogleLogin';

const Login = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Send the data to the server using Axios
        const response = await axios.get('/login', {
          params: {
            email: formData.email,
            password: formData.password,
          },
        });
        window.alert("Loged in User!")
        navigate('/');
        console.log('Server Response:', response.data);
      } catch (error) {
          window.alert("Some login issue")
          navigate('/login')
        console.error('Error submitting data:', error);
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-500">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-6 text-center font-semibold">Log In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <GoogleLogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
