import { AccountModel } from "../models/account";

export interface AddAccountModel {
    name: string
    nick: string
    age: number
    email: string
    password: string
    firstFightingGame: string
}

export interface AddAccount {
    add(account: AddAccountModel): Promise<AccountModel>
}