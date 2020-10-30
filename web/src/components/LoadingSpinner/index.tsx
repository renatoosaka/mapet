import React from 'react';

import { Container, Inner } from './styles';

const LoadingSpinner: React.FC = () => {
  return (
    <Container>
      <Inner />
      <Inner />
      <Inner />
      <Inner />
    </Container>
  );
};

export default LoadingSpinner;
