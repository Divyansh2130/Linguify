import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Translation from './components/Translation';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Translation />
    </ThemeProvider>
  );
}

export default App;
