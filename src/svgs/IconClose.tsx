import { FC } from 'react';
import styled from 'styled-components';

interface IconMenuProps {}

const IconMenu: FC<IconMenuProps> = ({}) => {
  return (
    <Svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
      <g fill='#FFF' fillRule='evenodd'>
        <path d='M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z' />
        <path d='M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z' />
      </g>
    </Svg>
  );
};

const Svg = styled.svg``;

export default IconMenu;
