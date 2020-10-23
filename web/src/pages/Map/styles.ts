import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;
`

export const MapContent = styled.div`
  margin-left: 100px;
  width: calc(100% - 100px);
  height: 100%;
`

export const Menu = styled.div`
  position: fixed;
  right: 32px;
  opacity: 0;

  z-index: 10;

  transition: all 0.2s ease-in-out;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: none;
`

export const MenuWrapper = styled.div`
  position: relative;

  border-radius: 4px;

  background-color: var(--color-background);

  display: flex;
  flex-direction: column;

  padding: 8px;

  &::after {
    position: absolute;
    content: '';

    width: 20px;
    height: 20px;

    border-radius: 2px;
    background-color: var(--color-background);

    bottom: -8px;
    right: 16px;

    transform: rotate(45deg);

    z-index: -1;
  }
`

export const MenuItem = styled.button`
  display: block;

  border: none;

  padding: 8px;

  font-size: 16px;
  text-align: left;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }

  &:hover {
    &.found-pet {
      color: var(--color-green);
    }

    &.lost-pet {
      color: var(--color-red);
    }
  }
`

export const AddButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  border: none;
  border-radius: 4px;

  background-color: var(--color-light-blue);

  color: #FFF;
  font-size: 20px;

  width: 56px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--color-light-blue-hover);
  }
`

export const AddButtonWrapper = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;

  width: 56px;
  height: 56px;

  z-index: 10;

  overflow: hidden;

  &:hover,
  &:focus-within {
    height: 165px;

    ${Menu} {
      opacity: 1;
      display: block;
    }
  }
`
