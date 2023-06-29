import { useEffect, useState } from "react";

const useLocalStorage = (key:string, initialValue:string|null) => {
    const isBrowser = typeof window !== 'undefined';
  
    const [value, setValue] = useState(() => {
      if (isBrowser) {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      }
      return initialValue;
    });
  
    useEffect(() => {
      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    }, [key, value, isBrowser]);
  
    return [value, setValue];
  };
  
  export default useLocalStorage;
  