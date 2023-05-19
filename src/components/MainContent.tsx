import React, { useState } from 'react';
import { useDataStore } from '../app/store';
import styled from 'styled-components';
import { Markdown, Preview, SelectOption } from '.';

const MainContent = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <Container>
      <SelectOption selected={selected} setSelected={setSelected} />
      {!selected ? <Markdown /> : <Preview />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default MainContent;
