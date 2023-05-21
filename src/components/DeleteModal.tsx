import { FC, useRef } from 'react';
import styled from 'styled-components';
import { CustomButton } from '.';
import { useDataStore } from '../app/store';

type Props = {
  onModalClose: () => void;
};

const DeleteModal = ({ onModalClose }: Props) => {
  const { selectedData, removeData } = useDataStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === modalRef.current) {
      onModalClose();
    }
  };

  return (
    <OpacityContainer ref={modalRef} onClick={e => handleClickOutside(e)}>
      <Wrapper>
        <Title>Delete this document?</Title>

        <Desc>
          Are you sure you want to delete the `{selectedData?.name}` document
          and its contents? This action cannot be reversed.
        </Desc>

        <CustomButton
          title='Confirm & Delete'
          onClick={() => {
            removeData(selectedData?.name);
            onModalClose();
          }}
          variant='primary'
          style={{ width: '100%' }}
        />
      </Wrapper>
    </OpacityContainer>
  );
};

const OpacityContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(124, 129, 135, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

const Wrapper = styled.div`
  width: 343px;
  height: 218px;
  background: #1d1f22;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  /* 100 */

  color: #ffffff;
`;

const Desc = styled.p`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  /* 400 */

  color: #c1c4cb;
`;
export default DeleteModal;
