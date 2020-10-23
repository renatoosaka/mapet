import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import { Marker, Popup } from "react-leaflet";

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import MapContainer from '../../components/Map'
import Sidebar from '../../components/Sidebar'

import Modal, { ModalBody, ModalHeader, useModal } from '../../components/Modal'

import Create from '../Create'

import {
  Container,
  MapContent,
  Menu,
  MenuWrapper,
  MenuItem,
  AddButton,
  AddButtonWrapper
} from './styles'

type ActionProps = 'found' | 'lost';

function Map() {
  const [action, setAction] = useState<ActionProps>('found')

  const { isShowing, toggle } = useModal()

  const handleOnClickAdd = (action : ActionProps) => {
    setAction(action);
    toggle();
  }
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
            <MenuItem className="lost-pet" onClick={() => handleOnClickAdd('lost')}>Perdi</MenuItem>
            <MenuItem className="found-pet" onClick={() => handleOnClickAdd('found')}>Encontrei</MenuItem>
          </MenuWrapper>
        </Menu>
        <AddButton>
          <FiPlus />
        </AddButton>
      </AddButtonWrapper>

      <Modal {...{isShowing, toggle}}>
        <ModalBody>
          <Create action={action} toggle={toggle} />
        </ModalBody>
      </Modal>
    </Container>
  )
}

export default Map;
