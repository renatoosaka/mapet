/* eslint-disable no-undef */
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import { uploads } from '../config/cloudinary'

import petView from '../views/pet'

import Pet from '../models/Pet'

export default {
  async index (request: Request, response: Response) {
    const repository = getRepository(Pet)

    const pets = await repository.find({ relations: ['images'] })

    return response.status(200).json(petView.renderMany(pets))
  },
  async show (request: Request, response: Response) {
    const { id } = request.params

    const repository = getRepository(Pet)

    const pet = await repository.findOne(id, {
      relations: ['images']
    })

    if (!pet) {
      return response.status(404).send()
    }

    return response.status(200).json(petView.render(pet))
  },
  async create (request: Request, response: Response) {
    const {
      latitude,
      longitude,
      pet_name,
      pet_type,
      detail,
      when,
      contact_name,
      phone_number,
      reward,
      founded,
      action_type
    } = request.body

    const uploader = async (path : string, filename: string) => await uploads(path, filename)

    const requestImages = request.files as Express.Multer.File[]

    const images = []

    for (const image of requestImages) {
      const { path, filename } = image
      const newPath = await uploader(path, filename)

      images.push({ path: newPath.url })
    }

    const data = {
      latitude,
      longitude,
      pet_name,
      pet_type,
      detail,
      when,
      contact_name,
      phone_number,
      reward,
      founded,
      action_type,
      images
    }

    const schema = Yup.object().shape({
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      pet_name: Yup.string().when('action_type', (value, schema) => value === 'L' ? schema.required() : schema),
      detail: Yup.string().required().max(300),
      when: Yup.date().required(),
      action_type: Yup.mixed().oneOf(['L', 'F']),
      pet_type: Yup.string().required(),
      images: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      }))
    })

    await schema.validate(data, {
      abortEarly: false
    })

    const repository = getRepository(Pet)

    const pet = repository.create(data)

    await repository.save(pet)

    return response.status(201).json(pet)
  }
}
