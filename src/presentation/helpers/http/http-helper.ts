import { AnauthorizedError, ServerError } from "../../errors"
import { HttpResponse } from "../../protocols/http"

export const badRequest = (error: Error): HttpResponse => {
    return {
        statusCode: 400,
        body: error
    }
}

export const anauthorized = (): HttpResponse => {
    return {
        statusCode: 401,
        body: new AnauthorizedError()
    }
}

export const serverError = (error: Error): HttpResponse => {
    return {
        statusCode: 500,
        body: new ServerError(error.stack)
    }
}

export const success = (data: any): HttpResponse => {
    return {
        statusCode: 200,
        body: data
    }
}