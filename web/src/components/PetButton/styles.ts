import styled from 'styled-components'

export interface PetButtonProps {
  action: 'lost' | 'found';
  active: boolean;
}

export const Container = styled.div`
  margin: 0 8px;
`

export const Button = styled.button<PetButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${props => props.active ? props.action === 'lost' ? 'var(--color-red)' : 'var(--color-green)' : 'var(--color-border)'};
  border-radius: 4px;

  width: 72px;
  height: 72px;

  margin-bottom: 8px;

  color: ${props => props.active ? props.action === 'lost' ? 'var(--color-red)' : 'var(--color-green)' : 'var(--color-label)'};
  background-color: ${props => props.active ? props.action === 'lost' ? 'var(--color-red-light)' : 'var(--color-green-light)' : 'var(--color-background)'};

  cursor: pointer;


  &:hover {
    background-color: ${props => props.active ? props.action === 'lost' ? 'var(--color-red-light)' : 'var(--color-green-light)' : 'var(--color-white)'};
  }
`
