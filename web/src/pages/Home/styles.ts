import styled from 'styled-components'
import { Link } from 'react-router-dom'

import LogoSVG from '../../assets/logo.svg'
import PetsSVG from '../../assets/pets.svg'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #2BC0E4 0%, #EAECC6 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img.attrs({
  src: LogoSVG,
  alt: 'mapet'
})`
  position: absolute;
  top: 0;
  left: 0;
`

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1200px;

  height: 100%;
  max-height: calc(100vh - 80px);

  display: flex;
  align-items: flex-start;

  flex-direction: column;

  justify-content: center;

  background: url(${PetsSVG}) no-repeat right center;
  background-size: contain;
`

export const Main = styled.div``

export const Title = styled.h1``

export const Subtitle = styled.h3``

export const Button = styled(Link)`
  position: absolute;

  right: 0;
  bottom: 0;

  width: 56px;
  height: 56px;

  background-color: var(--color-light-blue);

  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFF;
  font-size: 32px;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: var(--color-light-blue-hover);
  }
`
