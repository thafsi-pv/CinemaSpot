import { useEffect, useState } from "react";

const useLocalStorage = (initial) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(initial);
    setValue(data);
  }, []);

  const handleSetLS = (val, token) => {
    localStorage.setItem(val, token);
  };

  const handleGetLS = (val) => {
    const data = localStorage.getItem(val);
    setValue(data);
    return data;
  };

  const handleRemoveLS = (val) => {
    localStorage.removeItem(val);
  };

  return {
    value,
    handleGetLS,
    handleSetLS,
    handleRemoveLS,
  };
};

export default useLocalStorage;
