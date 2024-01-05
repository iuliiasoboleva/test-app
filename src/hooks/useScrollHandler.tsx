import { useEffect } from 'react';

const useScrollHandler = (callback: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      callback(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};

export default useScrollHandler;
