const companiesController = require("./controllers/companiesController")
const userController = require("./controllers/usersController")

const routes = (app) => {
    //users
    app.get("/users",userController.getAll)
    app.get("/users/:id",userController.getById)
    app.post("/users",userController.create)
    app.put("/users/:id",userController.update)
    app.delete("/users/:id",userController.remove)

    //companies
    app.post("/companies",companiesController.create)
    app.get("/companies/:id",companiesController.getById)
    app.get("/companies",companiesController.getAll)
    app.put("/companies/:id",companiesController.update)
    app.delete("/companies/:id",companiesController.remove)
}

module.exports = routes