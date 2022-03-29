const isNumber = (id) => {
    if (isNaN(id)) {
        let error = new Error("ID must be a positive integer")
        error.status = 400
        return next(error)
    }
}
module.exports = isNumber