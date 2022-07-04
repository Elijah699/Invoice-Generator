
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './components/Theme';
import { useDarkMode } from './components/useDarkMode';
// import Toggle from './components/Toggler';

import Header from './components/Header';
import Home from './components/Home';

const App = () => {

  const [theme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div></div>;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header />
        <Home />
        {/* <div style={{textAlign: 'center', marginRight: '50px', marginTop: '100px' }}>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div> */}
      </>
    </ThemeProvider>
  );
}

export default App;
