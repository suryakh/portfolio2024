import * as React from 'react';
import { createTheme, ThemeProvider,alpha, getContrastRatio } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import Button from '@mui/material/Button';


const violetBase = '#7F00FF';
const violetMain = '#274472';


const theme = createTheme({
  palette: {
    background:{
      default: '#172243'
    },
    primary: { 
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    secondary:{
      main: violetBase,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    }
  },
});

export default function UsingColorObject({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}