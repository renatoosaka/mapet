import styled from 'styled-components'

import { Map, MapProps } from "react-leaflet";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .leaflet-container {
    z-index: 5;
  }
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
