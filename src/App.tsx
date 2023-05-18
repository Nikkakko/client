import React from 'react';
import { useThemeStore } from './app/store';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Header } from './components';

const App = () => {
  const theme = useThemeStore(state => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};
`;

export default App;
