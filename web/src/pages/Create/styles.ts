import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
`

export interface TypeProps {
  action: 'found' | 'lost';
}

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    color: var(--color-text);
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: var(--color-red);
    }
  }
`

export const Title = styled.h3<TypeProps>`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
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

export const PetSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const DivisionLine = styled.hr`
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 16px 0;
`

export const Label = styled.label`
  display: block;
  width: 100%;

  color: var(--color-label);
  font-size: 16px;

  margin: 8px 0;
`

export const Input = styled.input`
  display: block;
  width: 100%;

  padding: 8px;
  margin-bottom: 8px;

  border: 1px solid var(--color-border);
  border-radius: 4px;

  background-color: var(--color-background);

  color: var(--color-text);
  font-size: 16px;
`

export const Textarea = styled.textarea.attrs({ rows: 5 })`
  display: block;
  width: 100%;

  padding: 8px;
  margin-bottom: 8px;

  border: 1px solid var(--color-border);
  border-radius: 4px;

  background-color: var(--color-background);

  color: var(--color-text);
  font-size: 16px;

  resize: vertical;
`

export const Button = styled.button<TypeProps>`
  border: none;
  border-radius: 4px;

  width: 100%;
  height: 48px;

  padding: 8px;

  font-size: 16px;
  color: #FFF;

  background-color: ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};

  margin: 8px 0 16px 0;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.action === 'found' ? 'var(--color-green-hover)' : 'var(--color-red-hover)'};
  }
`

export const PhotoContainer = styled.div`
  margin-bottom: 8px;
`

export const PhotoButton = styled.div<TypeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 96px;

  color: ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
  font-size: 20px;

  border: 1px dashed ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
  border-radius: 4px;

  cursor: pointer;
`
