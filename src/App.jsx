import React, { useState } from 'react';
import wave from './assets/sssurf.svg';
import logo from './assets/logo.png';
import Spline from '@splinetool/react-spline';
import Switch from './Switch';  

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div
      className={`h-screen w-screen relative overflow-hidden transition-colors duration-500 text-[#FF9967]  ${
        darkTheme ? 'bg-zinc-900 ' : 'bg-[#e1d6cb] '
      }`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 fixed w-full z-50">
        <a href="https://zaid-craft-studio.vercel.app" target='_blank'><img src={logo} alt="logo" className="sm:w-[4.5vw] w-[12vw]" /></a>
        {/* Switch toggle */}
        <Switch
          checked={darkTheme}
          onChange={() => setDarkTheme(!darkTheme)}
        />
      </nav>

      {/* 3D Spline Scene */}
      <Spline
  className="absolute inset-0 z-40 spline-clip"
  scene="https://prod.spline.design/uYl36BMnEHnd819P/scene.splinecode"
/>


      {/* Hero Section */}
      <div className='absolute inset-0 z-30 leading-[8vw] flex flex-col items-center justify-center'>
        <h1 className='sm:text-[12vw] text-[24vw] mb-10'>Puffy</h1>
      
      </div>



      {/* Wave Image */}
      <img
        className="absolute w-full sm:scale-100 scale-150 sm:-bottom-30 bottom-0 opacity-70 z-0"
        src={wave}
        alt="wave"
      />
    </div>
  );
};

export default App;
