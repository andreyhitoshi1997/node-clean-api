import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { MissimParamError } from '../errors/missing-param-error'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissimParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissimParamError('email')
      }
    }
  }
}
