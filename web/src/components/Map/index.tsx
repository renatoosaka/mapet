import React from 'react';
import { LeafletMouseEvent } from 'leaflet';
import { TileLayer } from "react-leaflet";

import { useMap } from '../../contexts/MapContext'

import MapLoadingSVG from '../../assets/map-loading.svg'
import LocationDisabledSVG from '../../assets/location-disabled.svg'

import {
  Container,
  Image,
  Message,
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
  const { gelocationEnabled, coordinates } = useMap()

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    onMapClick && onMapClick({
      latitude: lat,
      longitude: lng
    })
  }

  if (coordinates.latitude === 0 && gelocationEnabled) {
    return (
      <Container>
        <Image src={MapLoadingSVG} />
        <Message>Carregando Mapa</Message>
      </Container>
    )
  }

  if (!gelocationEnabled) {
    return (
      <Container>
        <Image src={LocationDisabledSVG} />
        <Message style={{ color: 'var(--color-red)', fontWeight: 800 }}>Ouch!!</Message>
        <Message style={{ margin: 0, fontSize: 21 }}>Precisamos ter acesso a sua localização</Message>
        <Message style={{ margin: 0, fontSize: 21 }}>para conseguirmos lhe ajudar a encontrar</Message>
        <Message style={{ margin: 0, fontSize: 21 }}>o seu amiguinho</Message>
      </Container>
    )
  }

  return (
    <Container>
      <MapContainer
        center={mapCenter ? [mapCenter.latitude, mapCenter.longitude] : [ coordinates.latitude, coordinates.longitude ]}
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
