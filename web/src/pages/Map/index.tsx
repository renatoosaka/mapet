import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import { Marker, Popup } from "react-leaflet";

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import MapContainer from '../../components/Map'
import Sidebar from '../../components/Sidebar'

import Modal, { ModalBody, useModal } from '../../components/Modal'

import Create from '../Create'
import Detail from '../Detail'

import { useMap } from '../../contexts/MapContext'

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
  const { fetchtPets, pets } = useMap()

  const [action, setAction] = useState<ActionProps>('found')

  const { isShowing: isShowingCreate, toggle: toggleCreate } = useModal()
  const { isShowing: isShowingDetail, toggle: toggleDetail } = useModal()

  useEffect(() => {
    fetchtPets()
  }, [])

  const handleOnClickAdd = (action : ActionProps) => {
    setAction(action);
    toggleCreate();
  }

  return (
    <Container>
      <Sidebar />
      <MapContent>
        <MapContainer>
          {pets.map(pet => (
            <Marker
              icon={pet.action_type === 'F' ? FoundMapIcon : LostMapIcon}
              position={[pet.latitude, pet.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className={`map-popup ${pet.action_type === 'F' ? 'found-pet' : 'lost-pet' }`}>
                {pet.action_type === 'F' ? `Encontrei um cachorrinho` : `${pet.pet_name} está perdido(a)`}
                <Button onClick={toggleDetail}>
                  <FiChevronRight size={20} color="#fff" />
                </Button>
              </Popup>
            </Marker>
          ))}
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
