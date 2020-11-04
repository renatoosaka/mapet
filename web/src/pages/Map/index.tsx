import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiPlus } from 'react-icons/fi'
import { Marker, Popup } from "react-leaflet"
import { useHistory, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import petTitle from '../../utlis/Title'
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

interface MapURLParams {
  pet: string;
}

function Map() {
  const history = useHistory()
  const { pet: petParam } = useParams<MapURLParams>()

  const { fetchtPets, pets, coordinates, gelocationEnabled } = useMap()

  const [action, setAction] = useState<ActionProps>('found')
  const [id, setID] = useState('')

  const { isShowing: isShowingCreate, toggle: toggleCreate } = useModal()
  const { isShowing: isShowingDetail, toggle: toggleDetail } = useModal()

  useEffect(() => {
    document.addEventListener("touchstart", function() {},false);
  }, [])

  useEffect(() => {
    if (!isShowingDetail) {
      history.replace({
        pathname: '/pets'
      })
    }
  }, [isShowingDetail, history])

  useEffect(() => {
    if (petParam) {
      const params = petParam.split('-')

      const id = params[params.length -1]

      if (id && parseInt(id) && !isShowingDetail) {
        setID(id)
        toggleDetail()
      }
    }
  }, [petParam])

  useEffect(() => {
    if (coordinates.latitude !== 0 && gelocationEnabled) {
      fetchtPets()
    }
  }, [coordinates, gelocationEnabled])

  const handleOnClickAdd = (action: ActionProps) => {
    setAction(action)
    toggleCreate()
  }

  const handleOnClickDetail = (id: string) => {
    setID(id)
    toggleDetail()
  }

  return (
    <Container>
      <Helmet>
        <title>mapet</title>
      </Helmet>
      <Sidebar />
      <MapContent>
        <MapContainer>
          {pets.map(pet => (
            <Marker
              key={pet.id}
              icon={pet.action_type === 'F' ? FoundMapIcon : LostMapIcon}
              position={[pet.latitude, pet.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className={`map-popup ${pet.action_type === 'F' ? 'found-pet' : 'lost-pet' }`}>
                {pet.action_type === 'F' ? petTitle(pet.pet_type) : `${pet.pet_name} está perdido(a)`}
                <Button onClick={() => handleOnClickDetail(pet.id.toString())}>
                  <FiChevronRight size={20} color="#fff" />
                </Button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MapContent>
      {coordinates.latitude !== 0 && gelocationEnabled && (
        <>
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
              <Detail id={id} toggle={toggleDetail} />
            </ModalBody>
          </Modal>
        </>
      )}
    </Container>
  )
}

export default Map;
