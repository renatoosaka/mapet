import React from 'react'
import { FiX } from 'react-icons/fi'

import NotFoundSVG from '../../assets/not-found.svg'

import {
  Container,
  Header,
  CloseButton,
  Title,
  Text,
  NotFoundImage,
  Content
} from './styles'

interface DetailProps {
  toggle: () => void;
}

const NotFound: React.FC<DetailProps> = ({ toggle }) => {
  return (
    <Container>
      <Header>
        <CloseButton onClick={toggle}>
          <FiX color={'var(--color-text)'}/>
        </CloseButton>
      </Header>
      <Content style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <NotFoundImage src={NotFoundSVG} />
        <Title action={'lost'}>Ouch!!!</Title>
        <Text>Não encontramos o amiguinho que você está procurando.</Text>
      </Content>
    </Container>
  )
}

export default NotFound;
