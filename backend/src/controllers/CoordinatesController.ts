import { Request, Response } from 'express'
import axios from 'axios'
import nodeGeocoder from 'node-geocoder'

export default {
  async show (request: Request, response: Response) {
    const { cep } = request.params

    const { data: address } = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep.match(/\d+/g)?.join('')}`)

    const geoCoder = await nodeGeocoder({
      provider: 'openstreetmap'
    })

    const data = await geoCoder.geocode(`${address.street}, ${address.city}, ${address.state}`)

    if (data.length === 0) {
      return response.status(400).json({
        message: 'Não foi possível encontrar sua localização'
      })
    }

    // let location = {
    //   latitude: 0,
    //   longitude: 0
    // }

    // if (data.length === 1) {
    //   location = {
    //     latitude: data[0].latitude,
    //     longitude: data[0].longitude
    //   }
    // } else {
    //   const locationIndex = data.findIndex(geo => geo.city.toLocaleLowerCase() === address.city.toLocaleLowerCase())

    //   if (locationIndex < 0) {
    //     return response.status(400).json({
    //       message: 'Não foi possível encontrar sua localização'
    //     })
    //   }

    //   location = {
    //     latitude: data[locationIndex].latitude,
    //     longitude: data[locationIndex].longitude
    //   }
    // }

    return response.json(data)
  }
}
