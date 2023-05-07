import { createContext, useState } from "react";

const DarkMode = createContext();

const DarkModeProvider = (props) => {
  const [colorMode, setIColorMode] = useState('dark');

  return (
    <DarkMode.Provider value={{ colorMode, setIColorMode }}>
      {props.children}
    </DarkMode.Provider>
  );
};

export { DarkMode, DarkModeProvider };
