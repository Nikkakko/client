import React, { useEffect, useState } from 'react';
import { useDataStore } from '../app/store';
import styled from 'styled-components';
import { Markdown, Preview, SelectOption } from '.';
import { device } from '../mediaQueries';

const MainContent = () => {
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    //check if width is less than 768px
  }, []);

  return (
    <Container>
      <Wrapper>
        {!selected ? (
          <Markdown setSelected={setSelected} selected={selected} />
        ) : (
          <Preview setSelected={setSelected} selected={selected} />
        )}
      </Wrapper>
      <TabletAndDesktop>
        <Markdown setSelected={setSelected} selected={selected} />
        {/* <Line /> */}
        <Preview setSelected={setSelected} selected={selected} />
      </TabletAndDesktop>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 54px);

  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }
`;

const TabletAndDesktop = styled(Wrapper)`
  display: none;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }
`;

const Line = styled.div`
  display: none;

  @media ${device.tablet} {
    background: #5a6069;
    display: block;
    position: absolute;
    left: 50%;
    right: 49.87%;
    top: 0%;
    bottom: 0%;
    width: 1px;
    height: 100%;
  }
`;

export default MainContent;
