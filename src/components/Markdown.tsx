import React from 'react';
import styled from 'styled-components';
import { useDataStore } from '../app/store';

const Markdown = () => {
  const { selectedData } = useDataStore();
  console.log(selectedData);
  return (
    <Container>
      {!selectedData.content && (
        <span>No content found. Please select a file from the left panel.</span>
      )}

      {selectedData.content && (
        <div dangerouslySetInnerHTML={{ __html: selectedData.content }} />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default Markdown;
