'use client';
import { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { brown, grey } from '@mui/material/colors';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const themeChangeContext = createContext({
  toggleTheme: () => {},
});
const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '150px',
          borderRadius: '8px',
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode

          primary: {
            main: '#c67070',
          },

          text: {
            primary: grey[700],
            secondary: grey[800],
          },
        }
      : {
          primary: { main: '#c67070' },

          text: {
            primary: '#fff',
            secondary: '#fff',
          },
        }),
  },
});
const ThemeChangeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const themeStore = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  console.log(theme);
  return (
    <themeChangeContext.Provider value={themeStore}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeChangeContext.Provider>
  );
};
export default ThemeChangeProvider;
