import 'bulma/css/bulma.css';
import * as React from 'react';
import Footer from '../Components/Footery';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from '../utils/theme';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
