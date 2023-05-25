import styled from 'styled-components';
import { useDataStore } from '../app/store';
import IconMenu from '../svgs/IconMenu';
import IconClose from '../svgs/IconClose';
import { IconDocument, IconSave } from '../assets';
import { device } from '../mediaQueries';
import IconDelete from '../svgs/IconDelete';
import { useEffect, useState } from 'react';

type Props = {
  onModalOpen: () => void;
};

const Header = ({ onModalOpen }: Props) => {
  const {
    isSidebarOpen,
    toggleSidebar,
    selectedData,
    updateMarkdown,
    contentValue,
  } = useDataStore();

  const [titleValue, setTitleValue] = useState<string>(
    selectedData?.title || ''
  );

  useEffect(() => {
    setTitleValue(selectedData?.title || '');
  }, [selectedData?.title]);

  return (
    <Container>
      <MenuWrapper onClick={toggleSidebar}>
        {isSidebarOpen ? <IconClose /> : <IconMenu />}
      </MenuWrapper>
      <Wrapper>
        <TitleWrapper>
          <Icon src={IconDocument} alt='icon' />
          <TitleInputWrapper>
            <DocumentName>Document Name</DocumentName>
            <TitleInput
              type='text'
              value={titleValue}
              onChange={e => setTitleValue(e.target.value)}
              placeholder='Untitled'
            />
          </TitleInputWrapper>
        </TitleWrapper>

        <Icons>
          <IconDelete onClick={onModalOpen} />
          <SaveWrapper
            onClick={() => {
              updateMarkdown(
                selectedData?.id || '',
                titleValue || '',
                contentValue
              );
            }}
          >
            <Icon src={IconSave} alt='icon' />
            {/* based on width change text */}
            <SaveText>Save Changes</SaveText>
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

const SaveText = styled.p`
  display: none;

  @media ${device.tablet} {
    display: block;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */

    /* 100 */

    color: #ffffff;
  }
`;

const MenuWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: #35393f;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    cursor: pointer;
    &:hover {
      background: #e46643;
      transition: 0.3s ease-in-out;
    }
  }
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

  @media ${device.tablet} {
  }
`;

const DocumentName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;

  /* 500 */

  color: #7c8187;

  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

const TitleInputWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
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

  @media ${device.tablet} {
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid #ffffff;
    }
  }
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

  @media ${device.tablet} {
    cursor: pointer;
    width: 152px;
    height: 40px;
    gap: 8px;
  }

  @media ${device.tablet} {
    &:hover {
      background: #f39765;
    }
  }
`;
export default Header;
