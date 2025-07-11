import React, { createContext, useMemo, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = createContext();

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({ toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')) }),
    []
  );

  const theme = useMemo(
    () => createTheme({ palette: { mode } }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
