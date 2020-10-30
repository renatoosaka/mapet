import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Devices from '../../styles/Devices'

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

  @media only screen and (${Devices.tablet}) {
    width: 280px;
  }

  @media only screen and (${Devices.mobileLL}) {
    width: 220px;
  }

  @media only screen and (${Devices.mobileL}) {
    left: 50%;

    transform: translateX(-50%);
  }
`

export const Wrapper = styled.div`
  position: relative;

  width: calc(100% - 80px);
  max-width: 1200px;

  height: 100%;
  max-height: calc(100vh - 80px);

  display: flex;
  align-items: flex-start;

  flex-direction: column;

  justify-content: center;

  background: url(${PetsSVG}) no-repeat right center;
  background-size: contain;

  color: var(--color-white);

  @media only screen and (${Devices.laptop}) {
    background-size: 60%;
  }

  @media only screen and (${Devices.tablet}) {
    flex-direction: row;
    justify-content: flex-end;

    background: url(${PetsSVG}) no-repeat center bottom;
  }

  @media only screen and (${Devices.mobileLL}) {
    width: calc(100% - 20px);
    max-height: calc(100vh - 20px);

    background: url(${PetsSVG}) no-repeat right center;
    background-size: 50%;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media only screen and (${Devices.mobileL}) {
    width: calc(100% - 20px);
    max-height: calc(100vh - 20px);

    background: url(${PetsSVG}) no-repeat center bottom;
    background-size: contain;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  }
`

export const Main = styled.div``

export const Title = styled.h1`
  @media only screen and (${Devices.tablet}) {
    font-size: 34px;
  }

  @media only screen and (${Devices.mobileL}) {
    margin-top: 120px;
  }
`

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
