import { FC } from 'react';
import { dataTypes } from '../types';
import styled from 'styled-components';
import { IconDocument } from '../assets';
import { RobotoLight, RobotoRegular } from '../styles/typography';
import { useDataStore } from '../app/store';

interface ItemListProps {
  item: dataTypes;
}

const ItemList: FC<ItemListProps> = ({ item }) => {
  const { setSelectedData } = useDataStore();

  return (
    <Container onClick={() => setSelectedData(item)}>
      <IconImg src={IconDocument} alt='icon' />
      <ItemWrapper>
        <LightText>{item?.createdAt}</LightText>

        <RegularText>{item?.name}</RegularText>
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 16.29px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconImg = styled.img``;

const LightText = styled(RobotoLight)`
  color: #7c8187;
`;

const RegularText = styled(RobotoRegular)`
  color: #ffffff;
`;

export default ItemList;
