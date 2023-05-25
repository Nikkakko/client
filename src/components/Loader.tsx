import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframe animation for the loader
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled wrapper for the loader
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.body};
`;

// Styled spinner element
const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #333;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;
