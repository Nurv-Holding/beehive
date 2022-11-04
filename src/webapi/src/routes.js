const companiesController = require("./controllers/companiesController")
const goalsController = require("./controllers/goalsController")
const goalsKrsController = require("./controllers/goalsKrsController")
const goalsTasksController = require("./controllers/goalsTasksController")
const goalsTemaController = require("./controllers/goalsTeamController")
const goalsTemaKrsController = require("./controllers/goalstemaKrsController")
const processGoalsTask = require("./controllers/processGoalsTaskController")
const processTaskUsers = require("./controllers/processTaskUsersController")
const profilesController = require("./controllers/profilesController")
const projectionGoalKrsController = require("./controllers/projectionGoalKrs")
const projectionProcessGoalsTaskController = require("./controllers/projectionProcessGoalsTaskController")
const projetionProcessTaskUsersController = require("./controllers/projetionProcessTaskUsersController")
const subtasksController = require("./controllers/subtasksController")
const tasksController = require("./controllers/tasksController")
const taskSubtasksController = require("./controllers/taskSubtasksController")
const teamsController = require("./controllers/teamsController")
const teamUsersController = require("./controllers/teamUsersController")
const teamUsersProjectionController = require("./controllers/teamUsersProjectionController")
const userController = require("./controllers/usersController")

const routes = (app) => {
    //users
    app.get("/users/c/:idCompany",userController.getAll)
    app.get("/users/:id/c/:idCompany",userController.getById)
    app.post("/users/c/:idCompany",userController.create)
    app.put("/users/:id",userController.update)
    app.delete("/users/:id",userController.remove)

    //profiles
    app.get("/profiles",profilesController.getAll)
    app.get("/profiles/:id",profilesController.getById)
    app.post("/profiles",profilesController.create)
    app.put("/profiles/:id",profilesController.update)
    app.delete("/profiles/:id",profilesController.remove)

    //companies
    app.post("/companies",companiesController.create)
    app.get("/companies/:id",companiesController.getById)
    app.get("/companies",companiesController.getAll)
    app.put("/companies/:id",companiesController.update)
    app.delete("/companies/:id",companiesController.remove)

    //goals
    app.post("/goals/c/:idCompany",goalsController.create)
    app.get("/goals/:id/c/:idCompany",goalsController.getById)
    app.get("/goals/c/:idCompany",goalsController.getAll)
    app.put("/goals/:id",goalsController.update)
    app.delete("/goals/:id",goalsController.remove)

        //goalsKrs
        app.post("/goalsKrs/c/:idCompany",goalsKrsController.create)
        app.get("/goalsKrs/:id/c/:idCompany",goalsKrsController.getById)
        app.get("/goalsKrs/c/:idCompany",goalsKrsController.getAll)
        app.put("/goalsKrs/:id",goalsKrsController.update)
        app.delete("/goalsKrs/:id",goalsKrsController.remove)

                //goalsKrs
                app.get("/goals/:idGoal/krs/c/:idCompany",projectionGoalKrsController().getByGoal)

    //goalsKrs
    app.post("/goalsTeam/c/:idCompany",goalsTemaController.create)
    app.get("/goalsTeam/:id/c/:idCompany",goalsTemaController.getById)
    app.get("/goalsTeam/c/:idCompany",goalsTemaController.getAll)
    app.put("/goalsTeam/:id",goalsTemaController.update)
    app.delete("/goalsTeam/:id",goalsTemaController.remove)

        //goalsKrs
        app.post("/goalsTeamKrs/c/:idCompany",goalsTemaKrsController.create)
        app.get("/goalsTeamKrs/:id/c/:idCompany",goalsTemaKrsController.getById)
        app.get("/goalsTeamKrs/c/:idCompany",goalsTemaKrsController.getAll)
        app.put("/goalsTeamKrs/:id",goalsTemaKrsController.update)
        app.delete("/goalsTeamKrs/:id",goalsTemaKrsController.remove)

    //teams
    app.post("/teams/c/:idCompany",teamsController.create)
    app.get("/teams/:id",teamsController.getById)
    app.get("/teams/c/:idCompany",teamsController.getAll)
    app.put("/teams/:id",teamsController.update)
    app.delete("/teams/:id",teamsController.remove)

    //teamUsers
    app.post("/members/teams",teamUsersController.create)
    app.get("/members/:id/teams",teamUsersController.getById)
    app.get("/members/teams",teamUsersController.getAll)
    app.put("/members/:id/teams",teamUsersController.update)
    app.delete("/members/:id/teams",teamUsersController.remove)

    //tasks
    app.post("/tasks/c/:idCompany",tasksController.create)
    app.get("/tasks/:id/c/:idCompany",tasksController.getById)
    app.get("/tasks/c/:idCompany/goal/:idGoal",tasksController.getByIdGoal)
    app.get("/tasks/c/:idCompany",tasksController.getAll)
    app.put("/tasks/:id",tasksController.update)
    app.delete("/tasks/:id",tasksController.remove)

        //taskSubtasks
        app.get("/tasks/:idTask/subtasks/c/:idCompany",taskSubtasksController().getById)
        app.get("/tasks/t/:idTask/q/subtasks/c/:idCompany",taskSubtasksController().getByIdQuantifySubtasks)
        app.get("/tasks/t/:idTask/q/subtasks/c/:idCompany/done",taskSubtasksController().getQuantifySubtasksDone)

    //subtasks
    app.post("/subtasks",subtasksController.create)
    app.get("/subtasks/:id",subtasksController.getById)
    app.get("/subtasks",subtasksController.getAll)
    app.put("/subtasks/:id",subtasksController.update)
    app.delete("/subtasks/:id",subtasksController.remove)

    //processGoalsTask
    app.post("/process/goals",processGoalsTask.create)
    app.get("/process/:id/goals",processGoalsTask.getById)
    app.get("/process/goals",processGoalsTask.getAll)
    app.put("/process/:id/goals",processGoalsTask.update)
    app.delete("/process/:id/goals",processGoalsTask.remove)

        //projectionProcessGoalsTaskController
        app.get("/process/c/:idCompany/goal",projectionProcessGoalsTaskController().getAll)
        app.get("/process/c/:idCompany/goal/:idGoal",projectionProcessGoalsTaskController().getById)

    //processTaskUsers
    app.post("/process/task",processTaskUsers.create)
    app.get("/process/:id/task",processTaskUsers.getById)
    app.get("/process/task",processTaskUsers.getAll)
    app.put("/process/:id/task",processTaskUsers.update)
    app.delete("/process/:id/task",processTaskUsers.remove)

            //projetionProcessTaskUsersController
            app.get("/process/task/c/:idCompany",projetionProcessTaskUsersController().getAll)
            //app.get("/process/c/:idCompany/goal/:idGoal",projectionProcessGoalsTaskController().getById)

    //teamUsersProjection
    app.get("/users/p/team",teamUsersProjectionController().getAll)
    app.get("/users/team/:idTeam/c/:idCompany",teamUsersProjectionController().getById)




}

module.exports = routes