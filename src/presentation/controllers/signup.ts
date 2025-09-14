import { MissingParamError, InvalidParamError } from '../errors'
import { BadRequest, ServerError } from '../helpers/http-helper'
import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { type Controller } from '../protocols/controller'
import { type EmailValidator } from '../protocols/email-validator'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return BadRequest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) {
        return BadRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return ServerError()
    }
  }
}
