
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './components/Theme';
import { useDarkMode } from './components/useDarkMode';
// import Toggle from './components/Toggler';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler}/>
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
