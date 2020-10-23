import React, { useState } from 'react';
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import { Marker, Popup } from "react-leaflet";

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import MapContainer from '../../components/Map'
import Sidebar from '../../components/Sidebar'

import Modal, { ModalBody, useModal } from '../../components/Modal'

import Create from '../Create'
import Detail from '../Detail'

import {
  Container,
  MapContent,
  Button,
  Menu,
  MenuWrapper,
  MenuItem,
  AddButton,
  AddButtonWrapper
} from './styles'

type ActionProps = 'found' | 'lost';

function Map() {
  const [action, setAction] = useState<ActionProps>('found')

  const { isShowing: isShowingCreate, toggle: toggleCreate } = useModal()
  const { isShowing: isShowingDetail, toggle: toggleDetail } = useModal()

  const handleOnClickAdd = (action : ActionProps) => {
    setAction(action);
    toggleCreate();
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
              <Button onClick={toggleDetail}>
                <FiChevronRight size={20} color="#fff" />
              </Button>
            </Popup>
          </Marker>

          <Marker
            icon={LostMapIcon}
            position={[-22.224672, -49.958012]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup lost-pet">
              Milu está perdida
              <Button onClick={toggleDetail}>
                <FiChevronRight size={20} color="#fff" />
              </Button>
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

      <Modal isShowing={isShowingCreate} toggle={toggleCreate}>
        <ModalBody>
          <Create action={action} toggle={toggleCreate} />
        </ModalBody>
      </Modal>

      <Modal isShowing={isShowingDetail} toggle={toggleDetail}>
        <ModalBody>
          <Detail toggle={toggleDetail} />
        </ModalBody>
      </Modal>
    </Container>
  )
}

export default Map;
