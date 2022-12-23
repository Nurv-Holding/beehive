class AuthorizationError extends Error {
    constructor() {
        super('not authorized')
    }
}

module.exports = AuthorizationError