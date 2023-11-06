import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  // Css feature used to check user theme preferences
  const preferDarkQuery = '(prefer-color-scheme:dark)';
  const [mode, setMode] = useState('');

  // update values on local storage
  useEffect(() => {
    // check system
    const mediaQuery = window.matchMedia(preferDarkQuery);
    // store user preferences
    const userPref = window.localStorage.getItem('theme');

    const handleChange = () => {
      if (userPref) {
        let check = userPref === 'dark' ? 'dark' : 'light';
        setMode(check);
        // use the feature of "dark" class in tailwind
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        // set default class by user system
        let check = mediaQuery.matches ? 'dark' : 'light';
        setMode(check);
        window.localStorage.setItem('theme', check);
        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // watch for changes on mode
  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  // as cosnt just used for ts stop complaining :c
  return [mode, setMode] as const;
};

export default useThemeSwitcher;
