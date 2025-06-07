import React, { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    localStorage.getItem('theme') === 'dark' || true
  })

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])
  const themeInfo = {
    isDarkMode,
    setIsDarkMode
  }
  return (
    <ThemeContext.Provider value={themeInfo}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider