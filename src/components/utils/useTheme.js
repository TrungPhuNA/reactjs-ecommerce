import React, { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";

const lightTheme = "light-mode";
const darkTheme = "dark-mode";

export const useTheme = () => {
  const darkMode = useDarkMode();

  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    setTheme(darkMode?.value ? darkTheme : lightTheme);
  }, [darkMode.value]);

  return theme;
};


export const BASE_URL = 'http://api-ecm.123code.net/api';
// export const BASE_URL = 'http://localhost:3006/api';
