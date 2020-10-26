import React, { useState, useEffect, createContext, useContext } from 'react';

import Api from '../services/Api'

interface ImageProps {
  url: string;
}

interface PetProps {
  id: number;
  latitude: number;
  longitude: number;
  pet_name: string;
  pet_type: string;
  detail: string;
  when: string;
  contact_name: string;
  phone_number: string;
  reward: number;
  founded: boolean;
  action_type: string;
  images: ImageProps[];
}

interface MapContextProps {
  loading: boolean;
  pets: PetProps[];
  pet: PetProps;
  fetchtPets: () => Promise<void>;
  fetchtPet: (id: string) => Promise<void>;
}

const MapContext = createContext<MapContextProps>({} as MapContextProps)

export const MapProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [pets, setPets] = useState<Array<PetProps>>([])
  const [pet, setPet] = useState<PetProps>({} as PetProps)

  const fetchtPets = async (): Promise<void> => {
    setLoading(true)
    try {
      const { data } = await Api.get<Array<PetProps>>('/pets')

      setPets(data)
    } catch(error) {
      // TODO: show error
    } finally {
      setLoading(false)
    }
  }

  const fetchtPet = async (id: string): Promise<void> => {
    setLoading(true)
    try {
      const { data } = await Api.get<PetProps>(`/pets/${id}`)

      setPet(data)
    } catch (error) {
      // TODO: show error
    } finally {
      setLoading(false)
    }
  }

  return (
    <MapContext.Provider value={{
      loading,
      pets,
      pet,
      fetchtPets,
      fetchtPet
    }}>
      {children}
    </MapContext.Provider>
  )
}


export const useMap = () => {
  const context = useContext(MapContext);

  return context
}
