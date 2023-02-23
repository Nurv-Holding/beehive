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
const projectionGoalTeamKrsController = require("./controllers/projectionGoalsTeamKrs")
const processGoalTeamController = require("./controllers/processGoalTeamController")
const projectionGoalsTeam = require("./controllers/projectionGoalsTeam")
const historyGoalsTeamKrsController = require("./controllers/historyGoalsTeamKrsController")
const historyGoalsKrsController = require("./controllers/historyGoalsKrsController")
const taskUsersController = require("./controllers/taskUsersControler")
const authenticateController = require("./controllers/autenticateController")
const futureVisionsController = require("./controllers/futureVisionsController")
const principlesController = require("./controllers/principlesController")
const proposalsController = require("./controllers/proposalsController")
const goalsUserController = require("./controllers/goalsUserController")
const goalsUserKrsController = require("./controllers/goalsUserKrsController")
const historyGoalsUserKrsController = require("./controllers/historyGoalsUserKrsController")

const routes = (app) => {
    //login
    app.post("/login", authenticateController)

    //users
    app.get("/users/c/:idCompany",userController.getAll)
    app.get("/users",userController.getAll)
    app.get("/users/:id/c/:idCompany",userController.getById)
    app.post("/users",userController.create)
    app.put("/users/:id",userController.update)
    app.delete("/users/:id",userController.remove)

        //employee
        app.post("/employees/c/:idCompany",userController.createEmployee)

    //profiles
    app.get("/profiles",profilesController.getAll)
    app.get("/profiles/:id",profilesController.getById)
    app.post("/profiles",profilesController.create)
    app.put("/profiles/:id",profilesController.update)
    app.delete("/profiles/:id",profilesController.remove)

    //companies
    app.post("/companies",companiesController.create)
    app.get("/companies/:id",companiesController.getById)
    app.get("/companies/c/:idCompany/goals",companiesController.getCompanyAndGoals)
    app.get("/companies",companiesController.getAll)
    app.get("/companies/by/cnpj/:cnpj",companiesController.getByCnpj)
    app.put("/companies/:id",companiesController.update)
    app.delete("/companies/:id",companiesController.remove)

    //futureVisions
    app.post("/furureVisions/c/:idCompany",futureVisionsController.create)
    app.get("/furureVisions/:id/c/:idCompany",futureVisionsController.getById)
    app.get("/furureVisions/c/:idCompany",futureVisionsController.getAll)
    app.put("/furureVisions/:id",futureVisionsController.update)
    app.delete("/furureVisions/:id",futureVisionsController.remove)

    //principles
    app.post("/principles/c/:idCompany",principlesController.create)
    app.get("/principles/:id/c/:idCompany",principlesController.getById)
    app.get("/principles/c/:idCompany",principlesController.getAll)
    app.put("/principles/:id",principlesController.update)
    app.delete("/principles/:id",principlesController.remove)

    //proposals
    app.post("/proposals/c/:idCompany",proposalsController.create)
    app.get("/proposals/:id/c/:idCompany",proposalsController.getById)
    app.get("/proposals/c/:idCompany",proposalsController.getAll)
    app.put("/proposals/:id",proposalsController.update)
    app.delete("/proposals/:id",proposalsController.remove)

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
        app.get("/goalsKrs/by/name/:name/c/:idCompany",goalsKrsController.findByName)
        app.put("/goalsKrs/:id",goalsKrsController.update)
        app.delete("/goalsKrs/:id",goalsKrsController.remove)

                  //historyGoalsKrs
                  app.post("/hGoalsKrs/history/:idCompany",historyGoalsKrsController.create)
                  app.get("/hGoalsKrs/history/:idCompany",historyGoalsKrsController.getAll)
                  app.get("/hGoalsKrs/history/:idCompany/:idGoal/:idGoalsKr",historyGoalsKrsController.progectionHistoryGoalKrByKr)
                  app.delete("/hGoalsKrs/history/:id",historyGoalsKrsController.remove)

                //projectionGoalsKrs
                app.get("/goals/:idGoal/krs/c/:idCompany",projectionGoalKrsController().getByGoal)

    //goalsUser
    app.post("/goalsUser/c/:idCompany",goalsUserController.create)
    app.get("/goalsUser/:id/c/:idCompany",goalsUserController.getById)
    app.get("/goalsUser/c/:idCompany",goalsUserController.getAll)
    app.put("/goalsUser/:id",goalsUserController.update)
    app.delete("/goalsUser/:id",goalsUserController.remove)
    app.get("/goalsUser/all/c/:idCompany/user/:idUser/krs",goalsUserController.getAllKrsByUser)
    app.get("/goalsUser/all/c/:idCompany/krs",goalsUserController.getAllKrs)

        //goalsUserKrs
        app.post("/goalsUserKrs/c/:idCompany",goalsUserKrsController.create)
        app.get("/goalsUserKrs/:id/c/:idCompany",goalsUserKrsController.getById)
        app.get("/goalsUserKrs/c/:idCompany",goalsUserKrsController.getAll)
        app.put("/goalsUserKrs/:id",goalsUserKrsController.update)
        app.delete("/goalsUserKrs/:id",goalsUserKrsController.remove)

                //historyGoalsUserKrs
                app.post("/history/goalsUserKrs/c/:idCompany",historyGoalsUserKrsController.create)
                app.get("/history/goalsUserKrs/:id/c/:idCompany",historyGoalsUserKrsController.getById)
                app.get("/history/goalsUserKrs/c/:idCompany",historyGoalsUserKrsController.getAll)
                app.get("/history/goalsUserKrs/c/:idCompany/krs/:idGoalsUserKr",historyGoalsUserKrsController.getHistoryKrsUsersByGoal)
                app.put("/history/goalsUserKrs/:id",historyGoalsUserKrsController.update)
                app.delete("/history/goalsUserKrs/:id",historyGoalsUserKrsController.remove)

    //goalsTeam
    app.post("/goalsTeam/c/:idCompany",goalsTemaController.create)
    app.get("/goalsTeam/:id/c/:idCompany",goalsTemaController.getById)
    app.get("/goalsTeam/c/:idCompany",goalsTemaController.getAll)
    app.put("/goalsTeam/:id",goalsTemaController.update)
    app.delete("/goalsTeam/:id",goalsTemaController.remove)

        //projectionGoals
        app.get("/goalsTeam/goal/:idGoal/c/:idCompany",projectionGoalsTeam().getByGoal)

        //goalsTeamKrs
        app.post("/goalsTeamKrs/c/:idCompany",goalsTemaKrsController.create)
        app.get("/goalsTeamKrs/:id/c/:idCompany",goalsTemaKrsController.getById)
        app.get("/goalsTeamKrs/c/:idCompany",goalsTemaKrsController.getAll)
        app.put("/goalsTeamKrs/:id",goalsTemaKrsController.update)
        app.delete("/goalsTeamKrs/:id",goalsTemaKrsController.remove)

            //historyGoalsTeamKrs
            app.post("/hGoalsTeamKrs/history/:idCompany",historyGoalsTeamKrsController.create)
            app.get("/hGoalsTeamKrs/history/:idCompany",historyGoalsTeamKrsController.getAll)
            app.get("/hGoalsTeamKrs/c/:idCompany/g/:idGoal/t/:idTeam/history/krs",historyGoalsTeamKrsController.progectionHistoryGoalTeamKrByKr)
            app.get("/hGoalsTeamKrs/p/history/krs",historyGoalsTeamKrsController.getAllHistoryGoalTeamKrByKr)
            app.delete("/hGoalsTeamKrs/history/:id",historyGoalsTeamKrsController.remove)

            //processGoalTeam
            app.post("/goalsTeam/process/c/:idCompany",processGoalTeamController.create)
            app.get("/goalsTeam/process/:id",processGoalTeamController.getById)
            app.get("/goalsTeam/c/process/:idCompany",processGoalTeamController.getAll)
            app.put("/goalsTeam/process/:id",processGoalTeamController.update)
            app.delete("/goalsTeam/process/:id",processGoalTeamController.remove)
            app.get("/goals/g/p/process/c/:idCompany",processGoalTeamController.getAllGoalGroupByTeam)
            app.get("/goals/g/p/process/c/krs/:idCompany",processGoalTeamController.getAllGoalGroupByKrs)
            app.get("/processGoalsTeams/all/teams/:idCompany",processGoalTeamController.getAllTeams)
            app.get("/processGoalsTeams/by/teams/:idCompany",processGoalTeamController.getByTeams)
            app.get("/processGoalsTeams/all/teams/krs/:idCompany",processGoalTeamController.getAllTeamsByKrs)
            app.get("/processGoalsTeams/teams/c/:idCompany/users/:idUser/goal/:idGoal",processGoalTeamController.getTeamsAndUsersByGoal)
            app.get("/processGoalsTeams/all/teams/c/:idCompany/users/:idUser/",processGoalTeamController.getTeamsAndUsersByUser)
            app.get("/processGoalsTeams/all/teams/c/:idCompany/users",processGoalTeamController.getAllTeamsAndUsers)

            //goalsTeam
            app.get("/goalsTeam/:idGoal/krs/c/:idCompany",projectionGoalTeamKrsController().getByGoal)
            app.get("/goalsTeam/t/:idTeam/c/:idCompany",projectionGoalTeamKrsController().getByTeam)
            app.get("/goalsTeam/g/t/:idGoal/c/:idCompany",projectionGoalTeamKrsController().getGroupByTeam)
            app.get("/goalsTeam/t/krs/:idTeam/c/:idCompany",projectionGoalTeamKrsController().getByTeamAndKrs)
            app.get("/goalsTeam/g/t/goal/:idGoal/c/:idCompany",projectionGoalTeamKrsController().getGroupByGoalTeam)
            app.get("/goalsTeamKrs/krs/g/goal/:idGoal/c/:idCompany",projectionGoalTeamKrsController().getGroupByKrs)

    //teams
    app.post("/teams/c/:idCompany",teamsController.create)
    app.get("/teams/:id/c/:idCompany",teamsController.getById)
    app.get("/teams/c/:idCompany",teamsController.getAll)
    app.put("/teams/:id",teamsController.update)
    app.delete("/teams/:id",teamsController.remove)

    //teamUsers
    app.post("/members/teams/c/:idCompany",teamUsersController.create)
    app.get("/members/:id/teams",teamUsersController.getById)
    app.get("/members/p/teams/c/:idCompany",teamUsersController.getAllTeamsAndUsers)
    app.get("/members/teams/c/:idCompany",teamUsersController.getAll)
    app.put("/members/:id/teams",teamUsersController.update)
    app.delete("/members/:id/teams",teamUsersController.remove)

    //tasks
    app.post("/tasks/c/:idCompany",tasksController.create)
    app.get("/tasks/:id/c/:idCompany",tasksController.getById)
    app.get("/tasks/c/:idCompany/goal/:idGoal",tasksController.getByIdGoal)
    app.get("/tasks/c/:idCompany",tasksController.getAll)
    app.put("/tasks/:id",tasksController.update)
    app.delete("/tasks/:id",tasksController.remove)

        //taskUsers
        app.get("/taskUsers/c/:idCompany",taskUsersController.getAll)
        app.get("/taskUsers/user/:idGoal/krs/c/:idCompany",taskUsersController.getByUserAndKrs)
        app.get("/taskUsers/user/:idUser/c/:idCompany/goal",taskUsersController.getTasksUserByGoal)
        app.post("/taskUsers/c/:idCompany",taskUsersController.create)
        app.put("/taskUsers/:id",taskUsersController.update)

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