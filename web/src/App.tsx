import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles'
import Routes from './Routes'

import { MapProvider } from './contexts/MapContext'

import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MapProvider>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </MapProvider>
  );
}

export default App;
