import styled from 'styled-components';
import { CommissionerBold, RobotoSpacing } from '../styles/typography';
import { CustomButton, ItemList, SwitchTheme } from '.';
import { useDataStore } from '../app/store';

const Sidebar = () => {
  const { data, createNewData, selectedData } = useDataStore();
  return (
    <Container>
      <Wrapper>
        <Title>markdown</Title>

        <Documents>
          <SubTitle>My Documents</SubTitle>

          <CustomButton
            title='+ New Document'
            onClick={() => createNewData()}
            variant='primary'
          />

          {data.map((item, index) => (
            <List key={index}>
              <ItemList
                item={item}
                selected={item.name === selectedData?.name}
              />
            </List>
          ))}
        </Documents>
      </Wrapper>

      <SwitchTheme />
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  background: #1d1f22;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 27px;
`;

const Wrapper = styled.div``;

const Title = styled(CommissionerBold)`
  text-transform: uppercase;
  color: #fff;
`;

const Documents = styled.div`
  margin-top: 27px;

  display: flex;
  flex-direction: column;
`;

const SubTitle = styled(RobotoSpacing)`
  color: #7c8187;
  text-transform: uppercase;
  margin-bottom: 29px;
`;

const List = styled.div`
  margin-top: 24px;

  /* margin-bottom: 16px; */
`;

export default Sidebar;
