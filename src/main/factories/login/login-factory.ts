import { LoginController } from "../../../presentation/controllers/login/login-controller"
import { AccountMongoRepository } from "../../../infra/db/mongodb/account/account-mongo-repository"
import { DbAuthentication } from "../../../data/usecases/authentication/db-authentication"
import { LogControllerDecorator } from "../../decorators/log-controller-decorator"
import { BcryptAdapter } from "../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter"
import { LogMongoRepository } from "../../../infra/db/mongodb/log/log-mongo-repository"
import { JwtAdapter } from "../../../infra/cryptography/jwt-adapter/jwt-adapter"
import { makeLoginValidation } from "./login-validation-factory"
import { Controller } from "../../../presentation/protocols"
import env from "../../config/env"

export const makeLoginController = (): Controller => {
    const salt = 12
    const bcryptAdapter = new BcryptAdapter(salt)
    const jwtAdapater = new JwtAdapter(env.jwtSecret)
    const accountMongoRepository = new AccountMongoRepository()
    const dbAuthentication = new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapater, accountMongoRepository)
    const loginController = new LoginController(makeLoginValidation(), dbAuthentication)
    const logMongoRepository = new LogMongoRepository()
    return new LogControllerDecorator(loginController, logMongoRepository)
}