import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const Container = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 56px auto;
  border-radius: 3px;
  max-width: 600px;
  border-radius: 4px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  padding: 8px 0;
  font-weight: bold;
`

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`

export const Body = styled.div``

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px 0;
`
