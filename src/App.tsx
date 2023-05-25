import { useEffect, useRef, useState } from 'react';
import { useDataStore, useThemeStore } from './app/store';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {
  DeleteModal,
  Header,
  Loader,
  MainContent,
  Sidebar,
} from './components';

const App = () => {
  const theme = useThemeStore(state => state.theme);
  const { isSidebarOpen, fetchAllData, data, isLoading } = useDataStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const fetchRef = useRef(fetchAllData);

  useEffect(() => {
    fetchRef.current();
  }, [data.length]);

  if (isLoading) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper isOpen={isSidebarOpen}>
        {isSidebarOpen && <Sidebar />}
        <Container isOpen={isSidebarOpen}>
          <Header onModalOpen={() => setIsModalOpen(true)} />
          <MainContent />
        </Container>
        {isModalOpen && (
          <DeleteModal onModalClose={() => setIsModalOpen(false)} />
        )}
      </Wrapper>
    </ThemeProvider>
  );
};

const Container = styled.div<{
  isOpen: boolean;
}>`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: absolute;
  left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  /* transition: all 0.1s ease-in-out; */
`;

const Wrapper = styled.div<{
  isOpen: boolean;
}>`
  display: flex;
  background-color: ${({ theme }) => theme.body};

  position: relative;
  height: 100vh;
  min-height: 100vh;

  /* overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')}; */

  overflow: hidden;
`;

export default App;
