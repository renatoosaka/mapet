import React from 'react'
import { FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import Map from '../../components/Map'

import Dog0 from '../../assets/dog_0.jpg'
import Dog1 from '../../assets/dog_1.jpg'
import Dog2 from '../../assets/dog_2.jpg'
import Dog3 from '../../assets/dog_3.jpg'
import Dog4 from '../../assets/dog_4.jpg'

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
  toggle: () => void;
}

const Detail: React.FC<DetailProps> = ({ toggle }) => {
  const action = 'lost'

  return <Container>
    <Header>
      <CloseButton onClick={toggle}>
        <FiX />
      </CloseButton>
      <PhotoWall src={Dog0} />
      <PhotoSlider>
        <Photo src={Dog0} className="active" />
        <Photo src={Dog1} />
        <Photo src={Dog2} />
        <Photo src={Dog3} />
        <Photo src={Dog4} />
      </PhotoSlider>
    </Header>
    <Content>
      <Title {...{action}}>Milu</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis porttitor mauris aliquam nulla nunc laoreet scelerisque mauris. Sit ut laoreet in id sem. Nullam id ipsum tristique risus vitae feugiat tempus tristique. Posuere nisl sed suspendisse interdum pulvinar nunc. Dignissim convallis lacus aliquam, lorem.
      </Text>

      <MapContainer {...{action}}>
        <Map />
        <MapDescriptionContainer>
          <MapDescription {...{action}}>Última localização conhecida</MapDescription>
        </MapDescriptionContainer>
      </MapContainer>

      <Text>Oferecemos uma recompensa de R$ 500,00</Text>
      <Text>Entre em contato caso tenha alguma pista de onde encontrar o nosso bichinho</Text>
      <Button><FaWhatsapp /> Whatsapp</Button>
    </Content>
  </Container>
}

export default Detail;
