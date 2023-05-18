import { FC } from 'react';
import styled from 'styled-components';

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
}

const CustomButton: FC<CustomButtonProps> = ({ title }) => {
  return <Button>{title}</Button>;
};

const Button = styled.button``;
export default CustomButton;
