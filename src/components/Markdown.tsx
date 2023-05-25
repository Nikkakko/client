import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDataStore } from '../app/store';
import { SelectOption } from '.';
import { device } from '../mediaQueries';

type Props = {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const Markdown = ({ selected, setSelected }: Props) => {
  const { selectedData, contentValue, onContentChange } = useDataStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef(onContentChange);

  useEffect(() => {
    autoResize();
  }, [selectedData?.content, contentValue]);

  useEffect(() => {
    contentRef.current(selectedData?.content || '');
  }, [selectedData?.content]);

  function autoResize() {
    if (textareaRef.current) {
      const { current: textarea } = textareaRef;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  return (
    <Container>
      <SelectOption
        selected={selected}
        setSelected={setSelected}
        title='Markdown'
        noIcon
      />
      {selectedData && (
        <ContentWrapper>
          <TextArea
            ref={textareaRef}
            value={contentValue}
            onChange={e => onContentChange(e.target.value)}
            placeholder='Start typing...'
            onInput={autoResize}
          />
        </ContentWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const ContentWrapper = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #c1c4cb;

  padding: 16px 16px;

  @media ${device.tablet} {
    padding: 9px 22px 14px 22px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: ${({ theme }) => theme.body};
  border: none;
  resize: none;
  outline: none;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.markDownText};

  @media ${device.tablet} {
  }
`;

export default Markdown;
