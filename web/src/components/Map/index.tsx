import React from 'react';
import { TileLayer } from "react-leaflet";

import {
  Container,
  MapContainer
} from './styles'

const Map: React.FC = ({ children }) => {
  return (
    <Container>
      <MapContainer
        center={[ -22.2308817, -49.9557046 ]}
        zoom={15}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {children}
      </MapContainer>
    </Container>
  )
}

export default Map;
