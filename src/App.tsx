import React from 'react';
import { useDataStore, useThemeStore } from './app/store';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Header, MainContent, Sidebar } from './components';

const App = () => {
  const theme = useThemeStore(state => state.theme);
  const { isSidebarOpen } = useDataStore();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {isSidebarOpen && <Sidebar />}
        <Container isOpen={isSidebarOpen}>
          <Header />
          <MainContent />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};

const Container = styled.div<{
  isOpen: boolean;
}>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.body};

  display: flex;
  flex-direction: column;

  position: absolute;

  left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
`;

const Wrapper = styled.div`
  display: flex;
`;

export default App;
