import React from 'react';

import { FiChevronRight } from 'react-icons/fi'

import {
  Container,
  Logo,
  Wrapper,
  Main,
  Title,
  Subtitle,
  Button
} from './styles'

function Home() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Main>
          <Title>Encontrando os Amigos</Title>
          <Subtitle>Perdeu? Achou? Nós ajudamos</Subtitle>
        </Main>
        <Button to="/pets">
          <FiChevronRight />
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Home;
