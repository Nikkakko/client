import React from 'react';

import styled from 'styled-components';
import { RobotoSpacing } from '../styles/typography';
import IconShowPreview from '../svgs/IconShowPreview';
import IconHidePreview from '../svgs/IconHidePreview';
import { device } from '../mediaQueries';
import { useThemeStore } from '../app/store';

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
  const { themeName } = useThemeStore();

  return (
    <Container
      style={{
        padding: noIcon ? '14px 16px' : '12px 16px 14px 16px',
      }}
      isSelected={selected}
    >
      <Title>{title}</Title>
      <Mobile>
        {!selected ? (
          <IconShowPreview
            onClick={() => setSelected(!selected)}
            fill={!selected && themeName !== 'light' ? '#fff' : '#7C8187'}
          />
        ) : (
          <IconHidePreview
            onClick={() => setSelected(!selected)}
            fill={selected && themeName === 'dark' ? '#fff' : '#7C8187'}
          />
        )}
      </Mobile>

      <ShowIconOnTablet>
        {!noIcon && (
          <IconShowPreview
            onClick={() => setSelected(!selected)}
            fill={!selected && themeName !== 'light' ? '#fff' : '#7C8187'}
          />
        )}
      </ShowIconOnTablet>
    </Container>
  );
};

const Container = styled.div<{
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  background-color: ${({ theme }) => theme.select};

  svg {
    cursor: pointer;
  }

  @media ${device.tablet} {
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
  color: ${({ theme }) => theme.text};
`;

const ShowIconOnTablet = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export default SelectOption;
