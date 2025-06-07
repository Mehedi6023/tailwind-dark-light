import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-neutral-100 relative dark:bg-neutral-950 transition-colors duration-300 ">
        <div className="absolute inset-0  isolate">
    {/* Light mode pattern */}
    <div className='absolute inset-0 dark:hidden' style={{
        backgroundImage:
        'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
    }}></div>
    <div className='absolute inset-0 dark:hidden' style={{
        backgroundImage:
        'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px',
        backgroundSize: '20px 20px'
    }}></div>
    
</div>
      <button
        onClick={toggleDarkMode}
        className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors cursor-pointer"
      >
        <i
          className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}
        ></i>
      </button>
      <Hero />
    </div>
  );
};

export default App;
