import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2">
      {darkMode ? <CiLight className='text-yellow-400 font-bold' size={30}/> : <MdDarkMode className='text-purple-700' size={30}/>}
    </button>
  );
};

export default DarkModeToggle;
