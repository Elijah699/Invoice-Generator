import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './components/Theme';
import { useDarkMode } from './hooks/useDarkMode';
import { useLocalStorage } from './hooks/useLocalStorage';
import InvoicesContext from './context/InvoicesContext';

// pages
import Header from './components/Header';
import Home from './components/Home';
import CreateInvoice from './pages/CreateInvoice';
import ViewInvoice from './components/ViewInvoice';
import EditInvoice from './pages/EditInvoice';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const [invoices, setInvoices] = useLocalStorage('invoices', []);

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} themeToggler={themeToggler} />
        <InvoicesContext.Provider value={{ invoices, setInvoices }}>
          <Routes>
            <Route path="/" index element={<Home />} />

            <Route path="create-invoice" element={<CreateInvoice />} />

            <Route path='view-invoice/:id' element={<ViewInvoice />} />

            <Route path="edit-invoice/:id" element={<EditInvoice />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </InvoicesContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
