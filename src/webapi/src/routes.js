const companiesController = require("./controllers/companiesController")
const goalsController = require("./controllers/goalsController")
const goalsTasksController = require("./controllers/goalsTasksController")
const processGoalsTask = require("./controllers/processGoalsTaskController")
const processTaskUsers = require("./controllers/processTaskUsersController")
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

        //goalsTasks
        app.get("/goals/c/:idCompany/tasks",goalsTasksController().getAll)
        app.get("/goals/:idGoal/c/:idCompany/tasks/users",goalsTasksController().getByIdGoalUsers)
        app.get("/goals/:idGoal/c/:idCompany/tasks/done",goalsTasksController().getByIdGoalByDone)
        app.get("/goals/:idGoal/c/:idCompany/q/tasks",goalsTasksController().getByIdGoalByQuantifyTask)
        app.get("/goals/:idGoal/c/:idCompany/q/tasks/done",goalsTasksController().getByIdGoalByQuantifyTaskDone)

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

    //tasks
    app.post("/tasks/c/:idCompany",tasksController.create)
    app.get("/tasks/:id",tasksController.getById)
    app.get("/tasks/c/:idCompany",tasksController.getAll)
    app.put("/tasks/:id",tasksController.update)
    app.delete("/tasks/:id",tasksController.remove)

        //taskSubtasks
        app.get("/tasks/:idTask/subtasks/c/:idCompany",taskSubtasksController().getById)
        app.get("/tasks/t/q/subtasks/c/:idCompany",taskSubtasksController().getByIdQuantifySubtasks)
        app.get("/tasks/t/q/subtasks/c/:idCompany/done",taskSubtasksController().getQuantifySubtasksDone)

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