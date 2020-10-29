import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Marker } from "react-leaflet"

import Map from '../../components/Map'

import petTitle from '../../utlis/Title'

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import { useMap } from '../../contexts/MapContext'

import Shimmer from './shimmer'

import {
  Container,
  Header,
  CloseButton,
  PhotoWall,
  PhotoSlider,
  Photo,
  Content,
  Title,
  Text,
  MapContainer,
  MapDescriptionContainer,
  MapDescription,
  Button
} from './styles'

interface DetailProps {
  id: string;
  toggle: () => void;
}

const Detail: React.FC<DetailProps> = ({ id, toggle }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [action, setAction] = useState<'lost' | 'found'>('lost')

  const { fetchtPet, pet } = useMap()

  useEffect(() => {
    fetchtPet(id)
  }, [id])

  useEffect(() => {
    if (pet.action_type) {
      setAction(pet.action_type === 'F' ? 'found' : 'lost')
    }
  }, [pet])

  if (!Object.keys(pet).length) {
    return <Shimmer toggle={toggle} />
  }

  return <Container>
    <Header>
      <CloseButton onClick={toggle}>
        <FiX />
      </CloseButton>
      <PhotoWall src={pet.images[activeImageIndex].url} />
      <PhotoSlider>
        {pet.images.map((image, index) => <Photo src={image.url} key={image.url} className={activeImageIndex === index ? 'active' : ''} onClick={() => { setActiveImageIndex(index) }} />)}
      </PhotoSlider>
    </Header>
    <Content>
      {pet.action_type === 'L' && <Title {...{action}}>{pet.pet_name}</Title>}
      {pet.action_type === 'F' && <Title {...{action}}>{petTitle(pet.pet_type)}</Title>}
      <Text>
        {pet.detail}
      </Text>

      <MapContainer {...{action}}>
        <Map
          mapCenter={{
            latitude: pet.latitude,
            longitude: pet.longitude
          }}
        >
          <Marker
            interactive={false}
            icon={pet.action_type === 'F' ? FoundMapIcon : LostMapIcon}
            position={[pet.latitude, pet.longitude]}
          />
        </Map>
        <MapDescriptionContainer>
          <MapDescription {...{action}}>Última localização conhecida</MapDescription>
        </MapDescriptionContainer>
      </MapContainer>
      {pet.reward >0 && <Text>Oferecemos uma recompensa de {pet.reward.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>}

      {pet.phone_number && (
        <>
          <Text>Entre em contato caso tenha alguma pista de onde encontrar o nosso bichinho</Text>
          <Button href={`https://api.whatsapp.com/send?phone=55${pet.phone_number.match(/\d+/g)?.join('')}&text=Olá%20tenho%20notícias%20do%20seu%20pet`} target='_blank' rel='noopener noreferrer'><FaWhatsapp /> Whatsapp</Button>
        </>
      )}
    </Content>
  </Container>
}

export default Detail;
