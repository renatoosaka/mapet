import React, { useEffect, useState } from 'react'
import { FiX, FiPlus } from 'react-icons/fi'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import Map, { MapCoordinates } from '../../components/Map'
import PetButton from '../../components/PetButton'
import LoadingSpinner from '../../components/LoadingSpinner'

import { FoundMapIcon, LostMapIcon } from '../../utlis/MapIcon'

import {
  TypeProps,
  Container,
  Header,
  Form,
  Title,
  MapContainer,
  MapDescriptionContainer,
  MapDescription,
  PetSelectionContainer,
  DivisionLine,
  Label,
  Input,
  InputMask,
  Textarea,
  Error,
  Button,
  PhotoContainer,
  PhotoButton,
  Photo,
  PhotoImage,
  PhotoDelete
} from './styles'
import { Marker } from 'react-leaflet'

import { useMap, PetFormValues } from '../../contexts/MapContext'

interface CreateProps extends TypeProps {
  toggle: () => void;
}

const FILE_SIZE = 1024 * 1024
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/x-png', 'image/gif']

const schema = yup.object().shape({
  latitude: yup.string().required(),
  longitude: yup.string().required(),
  pet_name: yup.string().when('action_type', (value: any, schema: yup.ObjectSchema) => value === 'L' ? schema.required('Nome do pet não foi informado.') : schema),
  detail: yup.string().required('Detalhes não foram informados.').max(300, 'Máximo de 300 caracteres permitidos.'),
  when: yup.string().required('Data não foi informada.'),
  action_type: yup.mixed().oneOf(['L', 'F']),
  pet_type: yup.string().required('Qual é o seu bichinho?'),
  images: yup.array(
    yup.mixed()
    .required('A file is required')
    .test('fileSize', "File Size is too large", value => value.size <= FILE_SIZE)
    .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(value.type))
  ).required()
})

const Create: React.FC<CreateProps> = ({ action, toggle }) => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [pet_type, setPetType] = useState('')
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const { handleSubmit, errors, control, register, setValue } = useForm<PetFormValues>({
    resolver: yupResolver(schema)
  })

  const { createPet, loading } = useMap()

  useEffect(() =>  {
    register('latitude')
    register('longitude')
    register('pet_type')
    register('images')
    register('action_type')

    setValue('action_type', String(action[0].toLocaleUpperCase()))
  }, [action, register, setValue])

  const errorFileMessage = (type: string) => {
    if (type === 'fileSize') {
      return 'Imagem deve ser menor que 2MB'
    } else if (type === 'fileType') {
      return 'São aceitos apenas arquivos PNG ou JPG'
    } else {
      return 'Imagem inválida'
    }
  }
  const handleMapClick = (coordinates: MapCoordinates) => {
    setValue('latitude', String(coordinates.latitude))
    setValue('longitude', String(coordinates.longitude))

    setPosition(coordinates)
  }

  const onSelectPetType = (type: string) => {
    setValue('pet_type', type)

    setPetType(type)
  }

  const handleSelectImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files){
      return;
    }

    const selectedImages = Array.from(event.target.files)

    setValue('images', selectedImages)

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  const handleDeleteImage = (index: number) => {
    const newImages = images.filter((_, idx) => idx !== index)

    setValue('images', newImages)

    setImages(newImages)
    setPreviewImages(previewImages.filter((_, idx) => idx !== index))
  }

  const onSubmit:SubmitHandler<PetFormValues> = async (values, e) => {
    e?.preventDefault()

    if (await createPet(values)) {
      toggle()
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <Title {...{action}}>{action === 'found' ? 'Encontrei' : 'Perdi'}</Title>
          <FiX onClick={toggle} />
        </Header>

        <MapContainer {...{action}}>
          <Map onMapClick={handleMapClick}>
            {position.latitude !== 0 && (
              <Marker
                interactive={false}
                icon={action === 'found' ? FoundMapIcon : LostMapIcon}
                position={[position.latitude,position.longitude]}
              />
            )}
          </Map>
          <MapDescriptionContainer>
            <MapDescription {...{action}}>Clique no mapa para adicionar a localização</MapDescription>
          </MapDescriptionContainer>
        </MapContainer>
        {errors.latitude && <Error>Localização não foi informada</Error>}
        <PetSelectionContainer>
          <PetButton active={pet_type === 'dog'} action={action} pet_type="dog" onClick={() => onSelectPetType('dog')} />
          <PetButton active={pet_type === 'cat'} action={action} pet_type="cat" onClick={() => onSelectPetType('cat')} />
          <PetButton active={pet_type === 'other'} action={action} pet_type="other" onClick={() => onSelectPetType('other')} />
        </PetSelectionContainer>
        {errors.pet_type && <Error>{errors.pet_type.message}</Error>}
        <DivisionLine />
        {action === 'lost' && (
          <>
            <Label>Nome do pet</Label>
            <Input name='pet_name' ref={register} />
            {errors.pet_name && <Error>{errors.pet_name.message}</Error>}
          </>
        )}
        <Label>Quando</Label>
        <Input type="date" name='when' ref={register} />
        {errors.when && <Error>{errors.when.message}</Error>}
        <Label>Detalhes</Label>
        <Textarea name='detail' ref={register} />
        {errors.detail && <Error>{errors.detail.message}</Error>}
        <Label>Fotos</Label>
        <PhotoContainer>
          {previewImages.map((image, index) => {
            return (
              <Photo key={image}>
                <PhotoDelete onClick={() => handleDeleteImage(index)}>
                  <FiX />
                </PhotoDelete>
                <PhotoImage src={image} />
              </Photo>
            )
          })}
          <PhotoButton {...{action}} htmlFor="image[]">
            <FiPlus />
          </PhotoButton>
          <input multiple onChange={handleSelectImages} type="file" id="image[]" accept="image/x-png,image/gif,image/jpeg"/>
        </PhotoContainer>
        {errors.images &&
          errors.images?.length === undefined && <Error>Envie uma foto para facilitar a busca :)</Error>}
        {errors.images &&
          errors.images.length > 0 &&
          errors.images.map(error => <Error>{errorFileMessage( error ? String(error.type) : '')}</Error>)}
        <Label>Nome para contato</Label>
        <Input name='contact_name' ref={register} />
        <Label>Whatsapp</Label>
        <Controller
          name="phone_number"
          control={control}
          defaultValue=""
          render={(props) => (
            <InputMask
            mask={[
              { mask: '(00) 00000-0000' },
              { mask: '(00) 0000-0000' }
            ]}
              {...props}
            />
          )}
        />
        {action === 'lost' && (
          <>
            <Label>Recompensa</Label>
            <Controller
              name="reward"
              control={control}
              defaultValue=""
              render={(props) => (
                <InputMask
                mask={Number}
                scale={2}
                signed={true}
                thousandsSeparator='.'
                radix=','
                padFractionalZeros={true}
                normalizeZeros={true}
                  {...props}
                />
              )}
            />
          </>
        )}
        <Button {...{action}} type="submit">
          {loading && (
            <>
              <LoadingSpinner />
              Aguarde
            </>
          )}
          {!loading && 'Confirmar'}
        </Button>
      </Form>
    </Container>
  )
}

export default Create;
