import leaflet from 'leaflet'

import FoundMarkerSVG from '../assets/found-marker.svg';
import LostMarkerSVG from '../assets/lost-marker.svg';

export const FoundMapIcon = leaflet.icon({
  iconUrl: FoundMarkerSVG,

  iconSize: [33, 36],
  iconAnchor: [16, 32],
  popupAnchor: [150, 14]
})

export const LostMapIcon = leaflet.icon({
  iconUrl: LostMarkerSVG,

  iconSize: [33, 36],
  iconAnchor: [16, 32],
  popupAnchor: [150, 14]
})
