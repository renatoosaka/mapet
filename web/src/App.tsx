import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Routes from './Routes'

import { MapProvider } from './contexts/MapContext'

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <MapProvider>
      <GlobalStyles />
      <Routes />
    </MapProvider>
  );
}

export default App;
