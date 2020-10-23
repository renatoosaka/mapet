import React from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import { Marker, Popup } from "react-leaflet";

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import MapContainer from '../../components/Map'
import Sidebar from '../../components/Sidebar'

import Modal, { ModalBody, useModal } from '../../components/Modal'

import {
  Container,
  MapContent,
  Menu,
  MenuWrapper,
  MenuItem,
  AddButton,
  AddButtonWrapper
} from './styles'

function Map() {
  const { isShowing, toggle } = useModal()
  return (
    <Container>
      <Sidebar />
      <MapContent>
        <MapContainer>
          <Marker
            icon={FoundMapIcon}
            position={[-22.227405, -49.953591]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup found-pet">
              Encontrei um cachorrinho
              <Link to="">
                <FiChevronRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>

          <Marker
            icon={LostMapIcon}
            position={[-22.224672, -49.958012]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup lost-pet">
              Milu está perdida
              <Link to="">
                <FiChevronRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        </MapContainer>
      </MapContent>
      <AddButtonWrapper>
        <Menu>
          <MenuWrapper>
            <MenuItem className="lost-pet" onClick={toggle}>Perdi</MenuItem>
            <MenuItem className="found-pet" onClick={toggle}>Encontrei</MenuItem>
          </MenuWrapper>
        </Menu>
        <AddButton>
          <FiPlus />
        </AddButton>
      </AddButtonWrapper>

      <Modal {...{isShowing, toggle}}>
        <ModalBody>
          teste
        </ModalBody>
      </Modal>
    </Container>
  )
}

export default Map;
