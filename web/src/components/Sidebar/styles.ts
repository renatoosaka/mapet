import styled from 'styled-components'

import LogoIconSVG from '../../assets/logo-icon.svg'

export const Container = styled.aside`
  position: fixed;
  width: 100px;
  height: 100vh;

  background-color: var(--color-light-blue);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  z-index: 10;
`

export const Logo = styled.img.attrs({
  src: LogoIconSVG,
  alt: 'mapet'
})`
  margin: 32px auto;
`
