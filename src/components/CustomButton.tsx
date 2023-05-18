import { FC } from 'react';
import styled from 'styled-components';
import { RobotoRegular } from '../styles/typography';

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: 'primary' | 'secondary';
}

const CustomButton: FC<CustomButtonProps> = ({ title, variant, ...props }) => {
  return (
    <Button {...props} variant={variant}>
      <StyledTitle>{title}</StyledTitle>
    </Button>
  );
};

export default CustomButton;

const Button = styled.button<{
  variant?: 'primary' | 'secondary';
}>`
  border: none;
  outline: none;
  background: #e46643;
  border-radius: 4px;

  ${({ variant }) =>
    variant === 'primary' &&
    `
      padding: 10px 44px 12px 43px;
    `}
`;

const StyledTitle = styled(RobotoRegular)`
  color: #fff;
  font-size: 14px;
`;
