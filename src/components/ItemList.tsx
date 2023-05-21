import { FC } from 'react';
import { dataTypes } from '../types';
import styled from 'styled-components';
import { IconDocument } from '../assets';
import { RobotoLight, RobotoRegular } from '../styles/typography';
import { useDataStore } from '../app/store';
import { convertedDate } from '../helpers';

interface ItemListProps {
  item: dataTypes;
  selected: boolean;
}

const ItemList: FC<ItemListProps> = ({ item, selected }) => {
  const { setSelectedData } = useDataStore();

  /* refactor style selected */
  const date = convertedDate(item?.createdAt);

  return (
    <Container onClick={() => setSelectedData(item)} selected={selected}>
      <IconImg src={IconDocument} alt='icon' />
      <ItemWrapper>
        <LightText>{date}</LightText>
        <RegularText>{item?.name}</RegularText>
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.div<{
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 16.29px;

  background: ${props => (props.selected ? '#2f3336' : 'transparent')};
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;

  /* set hover for only desktop versions */
  &:hover {
    background: ${props => (props.selected ? '#2f3336' : '#2f3336')};
  }
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
