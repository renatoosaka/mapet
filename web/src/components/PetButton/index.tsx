import React from 'react';

import { FaDog, FaCat } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'

import { PetButtonProps,  Container, Button } from './styles'

interface Props extends PetButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  pet_type: 'dog' | 'cat' | 'other';
}

const PetButton: React.FC<Props> = ({ pet_type, action, active, ...rest }) => {
  return (
    <Container>
      <Button {...{ action, active }} {...rest}>
        {pet_type === 'dog' && <FaDog size={40} />}
        {pet_type === 'cat' && <FaCat size={40} />}
        {pet_type === 'other' && <MdPets size={40} />}
      </Button>
    </Container>
  )
}


export default PetButton;
