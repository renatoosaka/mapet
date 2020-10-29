import styled from 'styled-components'

export interface TypeProps {
  action: 'found' | 'lost';
}

export const Container = styled.div`
  border-radius: 4px 4px 0 0;
`

export const Header = styled.div`
  position: relative;
  border-radius: 4px 4px 0 0;

  .photo-wall {
    border-radius: 4px 4px 0 0;

    width: 100%;
    height: 320px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  background-blend-mode: multiply;

  svg {
    font-size: 20px;
    color: #fff;
  }

  &:hover {
    svg {
      color: var(--color-red);
    }
  }
`

export const PhotoWall = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;

  border-radius: 4px 4px 0 0;
`

export const PhotoSlider = styled.div`
  margin: 8px 16px;
  display: flex;

  .photo-slider {
    width: 94px;
    height: 94px;

    border-radius: 4px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

export const Photo = styled.img`
  width: 94px;
  height: 94px;

  border-radius: 4px;

  cursor: pointer;

  object-fit: cover;

  opacity: .6;

  transition: all 0.2s ease-in-out;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &.active {
    opacity: 1;
  }
`

export const Content = styled.div`
  padding: 16px;

  .pet-name {
    width: 70%;
    height: 28px;

    margin-bottom: 16px;
  }

  .pet-detail {
    height: 28px;
    margin-bottom: 4px;

    &:nth-child(2) {
      width: 90%;
    }

    &:nth-child(3) {
      width: 80%;
    }

    &:nth-child(4) {
      width: 40%;
    }

    &:nth-child(5) {
      width: 60%;
      margin-bottom: 16px;
    }
  }

  .pet-map {
    width: 100%;
    height: 240px;

    border-radius: 4px;

    margin-bottom: 16px;
  }

  .pet-reward {
    width: 40%;
    height: 28px;

    margin-bottom: 16px;
  }

  .pet-contact {
    width: 80%;
    height: 28px;

    margin-bottom: 16px;
  }

  .pet-button {
    width: 100%;
    height: 48px;

    border-radius: 4px;

    margin-bottom: 16px;
  }
`

export const Title = styled.h3<TypeProps>`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
`

export const Text = styled.p`
  color: var(--color-text);
  font-size: 16px;
  line-height: 150%;
  font-weight: 600;

  margin: 16px 0;
`

export const MapContainer = styled.div<TypeProps>`
  position: relative;
  border: 1px solid ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
  border-radius: 8px;

  width: 100%;
  height: 240px;

  margin: 16px 0;

  .leaflet-container {
    border-radius: 4px;
  }

  padding: 1px;
`

export const MapDescriptionContainer = styled.div`
  position: absolute;
  background-color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 0;

  z-index: 10;

  bottom: 0;
  left: 0;
  right: 0;

  border-radius: 0 0 8px 8px;
`

export const MapDescription = styled.p<TypeProps>`
  color: ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
  font-size: 16px;
`

export const Button = styled.a`
  text-decoration: none;

  border: none;
  border-radius: 4px;

  width: 100%;
  height: 48px;

  padding: 8px;

  font-size: 16px;
  color: #FFF;

  background-color: var(--color-green);

  margin: 8px 0 16px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  svg {
    margin-right: 8px;
    font-size: 18px;
  }

  &:hover {
    background-color: var(--color-green-hover);
  }
`
