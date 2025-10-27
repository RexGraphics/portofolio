import { useEffect, useState } from "react"

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const media= window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    setTheme(media.matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', media.matches);

    media.addEventListener('change', handleChange);
    return() => media.removeEventListener('change', handleChange);
  }, []);
  return theme;
}

export default useTheme