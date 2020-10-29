import { LeafletMouseEvent } from 'leaflet';
import React from 'react';
import { TileLayer } from "react-leaflet";

import {
  Container,
  MapContainer
} from './styles'

export interface MapCoordinates {
  latitude: number;
  longitude: number;
}
interface MapProps {
  mapCenter?: MapCoordinates;
  onMapClick?: (coordinates: MapCoordinates) => void;
}

const Map: React.FC<MapProps> = ({ mapCenter, onMapClick, children }) => {

  function handleMapClick(event: LeafletMouseEvent){
    const { lat, lng } = event.latlng;

    onMapClick && onMapClick({
      latitude: lat,
      longitude: lng
    })
  }

  return (
    <Container>
      <MapContainer
        center={mapCenter ? [mapCenter.latitude, mapCenter.longitude] : [ -22.2308817, -49.9557046 ]}
        zoom={15}
        onclick={handleMapClick}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {children}
      </MapContainer>
    </Container>
  )
}

export default Map;
