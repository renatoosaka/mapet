import React from 'react'
import { FiX, FiPlus } from 'react-icons/fi'

import Map from '../../components/Map'
import PetButton from '../../components/PetButton'

import {
  TypeProps,
  Container,
  Header,
  Title,
  MapContainer,
  MapDescriptionContainer,
  MapDescription,
  PetSelectionContainer,
  DivisionLine,
  Label,
  Input,
  Textarea,
  Button,
  PhotoContainer,
  PhotoButton
} from './styles'

interface CreateProps extends TypeProps {
  toggle: () => void;
}

const Create: React.FC<CreateProps> = ({ action, toggle }) => {
  return (
    <Container>
      <Header>
        <Title {...{action}}>{action === 'found' ? 'Encontrei' : 'Perdi'}</Title>
        <FiX onClick={toggle} />
      </Header>

      <MapContainer {...{action}}>
        <Map />
        <MapDescriptionContainer>
          <MapDescription {...{action}}>Clique no mapa para adicionar a localização</MapDescription>
        </MapDescriptionContainer>
      </MapContainer>
      <PetSelectionContainer>
        <PetButton type="dog" />
        <PetButton type="cat" />
        <PetButton type="other" />
      </PetSelectionContainer>
      <DivisionLine />
      {action === 'lost' && (
        <>
          <Label>Nome do pet</Label>
          <Input />
        </>
      )}
      <Label>Quando</Label>
      <Input type="date" />
      <Label>Detalhes</Label>
      <Textarea />
      <Label>Fotos</Label>
      <PhotoContainer>
        <PhotoButton {...{action}}>
          <FiPlus />
        </PhotoButton>
      </PhotoContainer>
      <Label>Nome para contato</Label>
      <Input />
      <Label>Whatsapp</Label>
      <Input />
      {action === 'lost' && (
        <>
          <Label>Recompensa</Label>
          <Input />
        </>
      )}
      <Button {...{action}}>Confirmar</Button>
    </Container>
  )
}

export default Create;
