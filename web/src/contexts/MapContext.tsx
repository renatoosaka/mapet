import React, { useState, createContext, useContext } from 'react'
import { toast } from 'react-toastify'

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

export interface PetFormValues {
  latitude: string;
  longitude: string;
  pet_type: string;
  pet_name?: string;
  when: string;
  detail: string;
  contact_name?: string;
  phone_number?: string;
  reward?: number;
  images: File[];
  action_type: string;
}

interface MapContextProps {
  loading: boolean;
  pets: PetProps[];
  pet: PetProps;
  fetchtPets: () => Promise<void>;
  fetchtPet: (id: string) => Promise<void>;
  createPet: (values: PetFormValues) => Promise<boolean>;
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
      let message = ""
      if (error.response) {
        message = error.response.data.message || error.response.data.error;
      } else {
        message = error.message
      }

      toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      let message = ""
      if (error.response) {
        message = error.response.data.message || error.response.data.error;
      } else {
        message = error.message
      }

      toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false)
    }
  }

  const createPet = async (values: PetFormValues): Promise<boolean> => {
    try {
      const data = new FormData();

      data.append('latitude', values.latitude);
      data.append('longitude', values.longitude);
      data.append('pet_type', values.pet_type);
      data.append('detail', values.detail);
      data.append('when', values.when)
      data.append('pet_name', values.pet_name || '')
      data.append('contact_name', values.contact_name || '')
      data.append('phone_number', values.phone_number || '')
      data.append('reward', String(values.reward) || '')
      data.append('action_type', values.action_type)

      values.images.forEach(image => {
        data.append('images', image)
      });

      const { data: pet } = await Api.post('/pets', data)

      setPets([...pets, pet])

      return true
    } catch (error) {
      let message = ""
      if (error.response) {
        message = error.response.data.message || error.response.data.error;
      } else {
        message = error.message
      }

      toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return false
    }
  }

  return (
    <MapContext.Provider value={{
      loading,
      pets,
      pet,
      fetchtPets,
      fetchtPet,
      createPet
    }}>
      {children}
    </MapContext.Provider>
  )
}


export const useMap = () => {
  const context = useContext(MapContext);

  return context
}
