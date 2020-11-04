import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

import { Map, MapProps } from "react-leaflet";
import Devices from '../../styles/Devices';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .leaflet-container {
    z-index: 5;
  }
`
export const Image = styled.img`
  width:30%;
`

export const Message = styled.h2`
  font-weight: 600;
  margin: 32px 0;
  color: var(--color-message-map);
`

export const MapContainer = styled(Map)<MapProps>`
  width: 100%;
  height: 100%;

  .map-popup .leaflet-popup-content-wrapper {
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: var(--color-text);
    font-size: 16px;
    font-weight: 800;
    margin: 4px 4px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content button {
    margin-left: 8px;

    border: none;
    border-radius: 4px;

    width: 24px;
    height: 24px;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  .map-popup.found-pet .leaflet-popup-content button {
    background-color: var(--color-green);
  }

  .map-popup.lost-pet .leaflet-popup-content button {
    background-color: var(--color-red);
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`

export const WrapperContainer = styled.div`
  border-radius: 4px;
  background-color: var(--color-white);

  width: 500px;

  padding: 16px;

  margin-top: 16px;

  margin-bottom: 16px;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  @media only screen and (${Devices.mobileL}) {
    width: 400px;
  }

  @media only screen and (${Devices.mobileM}) {
    width: 350px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InputMask = styled(IMaskInput)`
  display: block;
  width: 100%;
  height: 48px;

  padding: 8px;

  border: 1px solid var(--color-border);
  border-radius: 4px;

  background-color: var(--color-background);

  color: var(--color-text);
  font-size: 16px;
`

export const Button = styled.button`
  border-radius: 4px;
  height: 48px;

  padding: 8px 16px;

  font-size: 16px;
  color: var(--color-white);

  border: none;

  background-color: var(--color-light-blue);
  margin-left: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: var(--color-light-blue-hover);
  }
`

export const ResultContainer = styled.div`
  width: 100%;

  margin-top: 16px;
`

export const ResultItem = styled.div`
  border-bottom: 1px solid var(--color-border);

  padding-bottom: 8px;

  margin-bottom: 8px;

  cursor: pointer;

  &:hover {
    background-color: var(--color-background);
  }

  &:last-child {
    margin-bottom: 0;

    padding-bottom: 0;

    border: none;
  }
`
