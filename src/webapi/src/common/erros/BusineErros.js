class BusinessError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = BusinessError