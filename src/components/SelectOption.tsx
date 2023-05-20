import React from 'react';

import styled from 'styled-components';
import { RobotoSpacing } from '../styles/typography';
import IconShowPreview from '../svgs/IconShowPreview';
import IconHidePreview from '../svgs/IconHidePreview';

type SelectOptionProps = {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectOption = ({ selected, setSelected }: SelectOptionProps) => {
  return (
    <Container>
      <Title>{!selected ? 'Markdown' : 'Preview'}</Title>
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
    </Container>
  );
};

const Container = styled.div`
  background: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 14px 16px;
  position: fixed;
  width: 100%;
  z-index: 1;

  svg {
    cursor: pointer;
  }
`;

const Title = styled(RobotoSpacing)`
  text-transform: uppercase;
  color: #fff;
`;

export default SelectOption;
