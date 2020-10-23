import React from 'react';

import { FaDog, FaCat } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'

import { Container, Button } from './styles'

interface PetButtonProps {
  type: 'dog' | 'cat' | 'other';

}
const PetButton: React.FC<PetButtonProps> = ({ type }) => {
  return <Container>
    <Button>
      {type === 'dog' && <FaDog size={40} />}
      {type === 'cat' && <FaCat size={40} />}
      {type === 'other' && <MdPets size={40} />}
    </Button>
  </Container>
}


export default PetButton;
