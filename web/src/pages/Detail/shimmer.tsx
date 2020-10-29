import React from 'react'
import { FiX } from 'react-icons/fi'

import Skeleton from '../../components/Skeleton'

import {
  Container,
  Header,
  CloseButton,
  PhotoSlider,
  Content
} from './styles'

interface DetailProps {
  toggle: () => void;
}

const Shimmer: React.FC<DetailProps> = ({ toggle }) => {
  return (
    <Container>
      <Header>
        <CloseButton onClick={toggle}>
          <FiX />
        </CloseButton>
        <Skeleton className="photo-wall" />
        <PhotoSlider>
          <Skeleton className="photo-slider" />
          <Skeleton className="photo-slider" />
          <Skeleton className="photo-slider" />
          <Skeleton className="photo-slider" />
        </PhotoSlider>
      </Header>
      <Content>
        <Skeleton className="pet-name" />
        <Skeleton className="pet-detail" />
        <Skeleton className="pet-detail" />
        <Skeleton className="pet-detail" />
        <Skeleton className="pet-detail" />
        <Skeleton className="pet-map" />
        <Skeleton className="pet-reward" />
        <Skeleton className="pet-contact" />
        <Skeleton className="pet-button" />
      </Content>
    </Container>
  )
}

export default Shimmer;
