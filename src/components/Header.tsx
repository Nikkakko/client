import React from 'react';
import styled from 'styled-components';
import { useDataStore } from '../app/store';
import IconMenu from '../svgs/IconMenu';
import { RobotoRegular } from '../styles/typography';
import { IconDocument, IconDelete, IconSave } from '../assets';

const Header = () => {
  const { data } = useDataStore();

  return (
    <Container>
      <MenuWrapper>
        <IconMenu />
      </MenuWrapper>

      <Wrapper>
        <TitleWrapper>
          <Icon src={IconDocument} alt='icon' />
          <Title>welcome.md</Title>
        </TitleWrapper>

        <Icons>
          <Icon src={IconDelete} alt='icon' />
          <SaveWrapper>
            <Icon src={IconSave} alt='icon' />
          </SaveWrapper>
        </Icons>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 56px;
  background: #2b2d31;

  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: #35393f;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 8px 8px 8px 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16.3px;
`;

const Title = styled(RobotoRegular)``;

const Icon = styled.img``;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SaveWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #e46643;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Header;
