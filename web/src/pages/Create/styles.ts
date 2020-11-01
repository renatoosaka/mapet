import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

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

export const Form = styled.form``

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

export const Help = styled.small`
  width: 100%;

  font-size: 12px;
  color: var(--color-label);
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
export const InputMask = styled(IMaskInput)`
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

export const Error = styled.span`
  display: block;

  font-size: 12px;
  color: var(--color-red);

  background-color: var(--color-red-light);

  border-radius: 4px;

  padding: 8px;

  margin: 4px 0;
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

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.action === 'found' ? 'var(--color-green-hover)' : 'var(--color-red-hover)'};
  }
`

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 8px;

  input[type=file] {
    display: none;
  }
`

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 96px;

  position: relative;

  border-radius: 8px;

  background-color: var(--color-background);

  margin-right: 8px;
`

export const PhotoImage = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`

export const PhotoDelete = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;

  background: #FFFFFF;
  border-radius: 0px 8px;

  width: 24px;
  height: 24px;

  font-size: 16px;
  color: var(--color-text);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    color: var(--color-red);
  }
`

export const PhotoButton = styled.label<TypeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 96px;

  color: ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
  font-size: 20px;

  border: 1px dashed ${props => props.action === 'found' ? 'var(--color-green)' : 'var(--color-red)'};
  border-radius: 8px;

  cursor: pointer;
`
