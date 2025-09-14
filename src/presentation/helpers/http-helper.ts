import { type HttpResponse } from '../protocols/http'
import { ServerError as ServerErrorClass } from '../errors/server-error'

export const BadRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ServerError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerErrorClass()
})
