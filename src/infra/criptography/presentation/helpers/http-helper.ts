import { type HttpResponse } from '../protocols/http'
import { ServerError as ServerErrorClass } from '../errors/server-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerErrorClass()
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
