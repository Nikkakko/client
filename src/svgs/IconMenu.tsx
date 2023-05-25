import { FC } from 'react';
import styled from 'styled-components';

const IconMenu: FC = () => {
  return (
    <Svg width='30' height='18' xmlns='http://www.w3.org/2000/svg'>
      <g fill='#FFF' fillRule='evenodd'>
        <path d='M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z' />
      </g>
    </Svg>
  );
};

const Svg = styled.svg``;

export default IconMenu;
