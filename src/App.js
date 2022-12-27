import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
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
import PrintInvoice from './components/PrintInvoice';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const [invoices, setInvoices] = useLocalStorage('invoices', []);
  // const [itemArray, setItemArray] = useLocalStorage('itemArray', [])


  const location = useLocation();

  const { pathname } = location

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {pathname.includes("print-invoice") ? (
          <div />
        ) : (
          <Header theme={theme} themeToggler={themeToggler} />
        )}
        {/* <Header theme={theme} themeToggler={themeToggler} /> */}
        <InvoicesContext.Provider value={{ invoices, setInvoices }}>
          <Routes>
            <Route path="/" index element={<Home />} />

            <Route path="create-invoice" element={<CreateInvoice />} />

            <Route path="view-invoice/:id" element={<ViewInvoice />} />

            <Route path="edit-invoice/:id" element={<EditInvoice />} />

            <Route path="print-invoice/:id" element={<PrintInvoice />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </InvoicesContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
