import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import 'express-async-errors'
import './database/connection'

import errorHandler from './errors/handler'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running :${port}`)
})
