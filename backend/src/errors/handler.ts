import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler:ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response.status(400).send({
      message: 'Validation fails',
      errors
    })
  }

  console.error(error)

  return response.status(500).send({
    message: 'Internal Server Error'
  })
}

export default errorHandler
