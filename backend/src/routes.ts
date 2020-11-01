import { Response, Router } from 'express'

import upload from './config/upload'

import PetsController from './controllers/PetsController'
import CoordinatesController from './controllers/CoordinatesController'

const routes = Router()

routes.get('/', (_, response: Response) => {
  response.json({
    message: 'Hello World'
  })
})

routes.get('/pets', PetsController.index)
routes.get('/pets/:id', PetsController.show)
routes.post('/pets', upload.array('images'), PetsController.create)

routes.get('/coordinates/:cep', CoordinatesController.show)

export default routes
