const userController = require("./controllers/usersController")

const routes = (app) => {
    app.get("/users",userController.getAll)
}

module.exports = routes