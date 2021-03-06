import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Logo
} from './styles'

function Sidebar() {
  return (
    <Container>
      <Link to="/pets">
        <Logo />
      </Link>
    </Container>
  )
}

export default Sidebar;
