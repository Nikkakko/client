import React from 'react';

import styled from 'styled-components';
import { RobotoSpacing } from '../styles/typography';
import IconShowPreview from '../svgs/IconShowPreview';
import IconHidePreview from '../svgs/IconHidePreview';
import { device } from '../mediaQueries';

type SelectOptionProps = {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  noIcon?: boolean;
};

const SelectOption = ({
  selected,
  setSelected,
  title,
  noIcon,
}: SelectOptionProps) => {
  return (
    <Container
      style={{
        padding: noIcon ? '14px 16px' : '12px 16px 14px 16px',
      }}
    >
      <Title>{title}</Title>
      <Mobile>
        {!selected ? (
          <IconShowPreview
            onClick={() => setSelected(!selected)}
            fill={!selected ? '#fff' : '#7C8187'}
          />
        ) : (
          <IconHidePreview
            onClick={() => setSelected(!selected)}
            fill={selected ? '#fff' : '#7C8187'}
          />
        )}
      </Mobile>

      <ShowIconOnTablet>
        {!noIcon && (
          <IconShowPreview
            onClick={() => {
              ('');
            }}
            fill={!selected ? '#fff' : '#7C8187'}
          />
        )}
      </ShowIconOnTablet>
    </Container>
  );
};

const Container = styled.div`
  background: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 12px 16px 14px 16px; */
  position: fixed;
  width: 100%;
  z-index: 1;

  svg {
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Mobile = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const Title = styled(RobotoSpacing)`
  text-transform: uppercase;
  color: #fff;
`;

const ShowIconOnTablet = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export default SelectOption;
