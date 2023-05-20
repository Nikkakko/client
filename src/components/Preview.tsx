import React from 'react';
import { useDataStore } from '../app/store';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';

const Preview = () => {
  const { selectedData } = useDataStore();
  return (
    <Container>
      {!selectedData.content && (
        <span>No content found. Please select a file from the left panel.</span>
      )}

      {selectedData.content && (
        <ReactMarkdown children={selectedData.content} />
      )}
    </Container>
  );
};

const Container = styled.div`
  /* color: #fff; */
`;

export default Preview;
