export class AnauthorizedError extends Error {
    constructor() {
        super('Internal server error')
        this.name = 'AnauthorizedError'
    }
}