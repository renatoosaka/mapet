import React, { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Marker } from "react-leaflet"
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Map from '../../components/Map'

import petTitle from '../../utlis/Title'
import slugfy from '../../utlis/Slug'

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import { useMap } from '../../contexts/MapContext'

import Shimmer from './shimmer'
import NotFound from './notFound'

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
  const history = useHistory()

  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [action, setAction] = useState<'lost' | 'found'>('lost')

  const { fetchtPet, pet, petNotFound } = useMap()

  useEffect(() => {
    fetchtPet(id)
  }, [id])

  useEffect(() => {
    if(pet) {
      if (pet.action_type) {
        setAction(pet.action_type === 'F' ? 'found' : 'lost')
      }

      if (pet.id) {
        let description = ''

        if (pet.action_type === 'F') {
          description = petTitle(pet.pet_type)
        } else {
          description = pet.pet_name
        }

        history.replace({
          pathname: `/pets/${slugfy(description)}-${pet.id}`
        })
      }
    }
  }, [pet, history])

  if (!pet && !petNotFound) {
    return <Shimmer toggle={toggle} />
  }

  if (!pet && petNotFound) {
    return <NotFound toggle={toggle} />
  }

  return pet && <Container>
    <Header>
      <Helmet>
        <meta name="title" content="mapet — Encontrando os Amigos. Perdeu? Achou? Nós ajudamos"/>
        <meta name="description" content={pet.detail}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:title" content={`mapet - ${pet.action_type === 'L' ? pet.pet_name : petTitle(pet.pet_type)}`}/>
        <meta property="og:description" content={pet.detail}/>
        <meta property="og:image" content={pet.images[0].url}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={window.location.href}/>
        <meta property="twitter:title" content={`mapet - ${pet.action_type === 'L' ? pet.pet_name : petTitle(pet.pet_type)}`}/>
        <meta property="twitter:description" content={pet.detail}/>
        <meta property="twitter:image" content={pet.images[0].url}/>

        <title>mapet - {pet.action_type === 'L' ? pet.pet_name : petTitle(pet.pet_type)}</title>
      </Helmet>
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
          <MapDescription {...{action}}>Última localização conhecida em {pet.when}</MapDescription>
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
