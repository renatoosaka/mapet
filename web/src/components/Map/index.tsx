import React, { useState } from 'react';
import { LeafletMouseEvent } from 'leaflet';
import { TileLayer } from "react-leaflet";

import { useMap } from '../../contexts/MapContext'

import MapLoadingSVG from '../../assets/map-loading.svg'
import LocationDisabledSVG from '../../assets/location-disabled.svg'

import LoadingSpinner from '../LoadingSpinner'

import {
  Container,
  Image,
  Message,
  MapContainer,
  WrapperContainer,
  FormContainer,
  InputMask,
  Button,
  ResultContainer,
  ResultItem
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
  const [cep, setCep] = useState('')

  const { gelocationEnabled, coordinates, getCoordinates, cepCoordinates, setCepSelectedCoordinates, loading } = useMap()

  const handleMapClick = (event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;

    onMapClick && onMapClick({
      latitude: lat,
      longitude: lng
    })
  }

  const handleGetCoordinates = async () => {
    await getCoordinates(cep)
  }

  const handleSelectCoordinates = (coordinates: MapCoordinates) => {
    setCepSelectedCoordinates(coordinates)
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
        <Message style={{ margin: 0, fontSize: 18 }}>Não foi possível identificar sua localização</Message>
        <Message style={{ margin: 0, fontSize: 18 }}>Por favor informe seu CEP para continuarmos</Message>
        <WrapperContainer>
          <FormContainer>
            <InputMask
              mask={'00000-000'}
              placeholder='Informe o seu CEP'
              onAccept={(value: string, _: any) => setCep(value)}
              autoFocus />
            <Button type="button" onClick={handleGetCoordinates} disabled={loading}>
              {loading && <LoadingSpinner />}
              Continuar
            </Button>
          </FormContainer>
          {cepCoordinates.length > 0 && (
          <ResultContainer>
            {cepCoordinates.map(data => <ResultItem key={data.latitude} onClick={() => handleSelectCoordinates({latitude: data.latitude, longitude: data.longitude})}>{data.formattedAddress}</ResultItem>)}
          </ResultContainer>
          )}
        </WrapperContainer>
      </Container>
    )

    // return (
    //   <Container>
    //     <Image src={LocationDisabledSVG} />
    //     <Message style={{ color: 'var(--color-red)', fontWeight: 800 }}>Ouch!!</Message>
    //     <Message style={{ margin: 0, fontSize: 21 }}>Precisamos ter acesso a sua localização</Message>
    //     <Message style={{ margin: 0, fontSize: 21 }}>para conseguirmos lhe ajudar a encontrar</Message>
    //     <Message style={{ margin: 0, fontSize: 21 }}>o seu amiguinho</Message>
    //   </Container>
    // )
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
