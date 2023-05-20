import React from 'react';
import styled from 'styled-components';
import { useDataStore } from '../app/store';

const Markdown = () => {
  const { selectedData, onContentChange } = useDataStore();

  return (
    <Container>
      {!selectedData.content && (
        <span>No content found. Please select a file from the left panel.</span>
      )}

      {selectedData.content && (
        <ContentWrapper>
          <TextArea
            value={selectedData?.content}
            onChange={e => onContentChange(selectedData.name, e.target.value)}
          />
        </ContentWrapper>
      )}
    </Container>
  );
};

const Container = styled.div``;

const ContentWrapper = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #c1c4cb;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: #151619;
  border: none;
  resize: none;
  outline: none;

  // hide scrollbar for chrome, safari and opera
  ::-webkit-scrollbar {
    display: none;
  }

  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* 400 */

  color: #c1c4cb;
`;

export default Markdown;
