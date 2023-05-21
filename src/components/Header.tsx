import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDataStore } from '../app/store';
import IconMenu from '../svgs/IconMenu';
import { RobotoRegular } from '../styles/typography';
import IconClose from '../svgs/IconClose';
import { IconDocument, IconDelete, IconSave } from '../assets';

const Header = () => {
  const {
    data,
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
    selectedData,
    removeData,
    onTitleChange,
    onSave,
  } = useDataStore();

  // set useref to close sidebar when clicking outside of it
  const sidebarRef = useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   // set data to localstorage
  //   localStorage.setItem('data', JSON.stringify(data));
  // }, [onSave, data]);

  return (
    <Container ref={sidebarRef}>
      <MenuWrapper onClick={toggleSidebar}>
        {isSidebarOpen ? <IconClose /> : <IconMenu />}
      </MenuWrapper>
      <Wrapper>
        <TitleWrapper>
          <Icon src={IconDocument} alt='icon' />
          {/* <Title>{selectedData?.name || 'Empty'}</Title> */}
          <TitleInput
            type='text'
            value={selectedData?.name || ''}
            onChange={e => onTitleChange(selectedData?.name, e.target.value)}
            placeholder='Untitled'
          />
        </TitleWrapper>

        <Icons>
          <Icon
            src={IconDelete}
            alt='icon'
            onClick={() => removeData(selectedData?.name)}
          />
          <SaveWrapper>
            <Icon
              src={IconSave}
              alt='icon'
              onClick={() => onSave(selectedData?.name)}
            />
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
  flex-grow: 0;

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

const TitleInput = styled.input`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  /* 100 */

  color: #ffffff;

  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

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

  cursor: pointer;
`;
export default Header;
