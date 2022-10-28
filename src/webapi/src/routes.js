const companiesController = require("./controllers/companiesController")
const goalsController = require("./controllers/goalsController")
const teamsController = require("./controllers/teamsController")
const teamUsersController = require("./controllers/teamUsersController")
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

    //goals
    app.post("/goals",goalsController.create)
    app.get("/goals/:id",goalsController.getById)
    app.get("/goals",goalsController.getAll)
    app.put("/goals/:id",goalsController.update)
    app.delete("/goals/:id",goalsController.remove)

    //teams
    app.post("/teams",teamsController.create)
    app.get("/teams/:id",teamsController.getById)
    app.get("/teams",teamsController.getAll)
    app.put("/teams/:id",teamsController.update)
    app.delete("/teams/:id",teamsController.remove)

    //teamUsers
    app.post("/members/teams",teamUsersController.create)
    app.get("/members/:id/teams",teamUsersController.getById)
    app.get("/members/teams",teamUsersController.getAll)
    app.put("/members/:id/teams",teamUsersController.update)
    app.delete("/members/:id/teams",teamUsersController.remove)
}

module.exports = routes