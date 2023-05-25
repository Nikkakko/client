import { useState } from 'react';

import styled from 'styled-components';
import { Markdown, Preview } from '.';
import { device } from '../mediaQueries';

const MainContent = () => {
  const [selected, setSelected] = useState<boolean>(false);

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
        {!selected && (
          <>
            <Line />
            <Markdown setSelected={setSelected} selected={selected} />
          </>
        )}

        <Preview setSelected={setSelected} selected={selected} />
      </TabletAndDesktop>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
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

    //change scroll bar color
  }

  @media ${device.laptopL} {
    //change scroll bar color
    ::-webkit-scrollbar {
      width: 3px;

      background: #151619;

      border-radius: 10px;

      &-thumb {
        background: #e46643;
      }
    }
  }
`;

const Line = styled.div`
  display: none;

  @media ${device.tablet} {
    background: #5a6069;
    display: block;
    position: absolute;
    left: 49.5%;

    top: 0;

    width: 1px;
    height: 100%;
  }
`;

export default MainContent;
