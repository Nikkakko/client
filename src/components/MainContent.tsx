import React, { useState } from 'react';
import { useDataStore } from '../app/store';
import styled from 'styled-components';
import { Markdown, Preview, SelectOption } from '.';

const MainContent = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <Container>
      <SelectOption selected={selected} setSelected={setSelected} />
      <Wrapper>{!selected ? <Markdown /> : <Preview />}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 58px 16px;
  height: calc(100vh - 54px);
`;

export default MainContent;
