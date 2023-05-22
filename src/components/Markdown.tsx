import React from 'react';
import styled from 'styled-components';
import { useDataStore } from '../app/store';
import { SelectOption } from '.';
import { device } from '../mediaQueries';

type Props = {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const Markdown = ({ selected, setSelected }: Props) => {
  const { selectedData, onContentChange } = useDataStore();

  return (
    <Container>
      <SelectOption
        selected={selected}
        setSelected={setSelected}
        title='Markdown'
        noIcon
      />
      {selectedData?.content ? (
        <ContentWrapper>
          <TextArea
            value={selectedData?.content}
            onChange={e => onContentChange(selectedData.name, e.target.value)}
          />
        </ContentWrapper>
      ) : (
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

const Container = styled.div`
  flex: 1;
  /* width: 100%; */
`;

const Wrapper = styled.div`
  margin-top: 52px;
  padding: 0 16px;
`;

const ContentWrapper = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #c1c4cb;

  /* padding: 48px 16px; */

  /* height: 100%; */
`;

const NoContent = styled.span`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #c1c4cb;
`;

const TextArea = styled.textarea`
  width: 100%;
  /* height: 100vh; */
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

  @media ${device.tablet} {
  }
`;

export default Markdown;
