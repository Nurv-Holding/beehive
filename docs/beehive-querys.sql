/*Projeção de todos os times e integrantes (teamUsersProjectionController)*/
select tu.id as idTeamUser, u.id as idUser, u.name as nameUser, t.id as idTeam, t.name as nameTeam
from teamusers as tu join teams as t on tu.idTeam=t.id
join users as u on tu.idUser=u.id where tu.idCompany=1;

/*Projeção de um os time e integrantes (teamUsersProjectionController)*/
select tu.id as idTeamUser, u.id as idUser, u.name as nameUser, t.id as idTeam, t.name as nameTeam
from teamusers as tu join teams as t on tu.idTeam=t.id
join users as u on tu.idUser=u.id where tu.idCompany=1 and t.id=1;

/*Projeção dos objetivos e as tarefas (goalsTasksController)*/
select tk.id as idTask, tk.name as nameTask, g.id as idGoal, g.name as nameGoal,u.id as idUser,tk.done as doneTask, 
u.name as nameUser, tk.descriptions, tk.initialDate, tk.finalDate, t.id as idTeam, t.name as nameTeam, count(*) as totalTask
from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
join users as u on tk.idUser=u.id where tk.idCompany=1;

/*Projeção de um objetivos e as tarefas (goalsTasksController)*/
select tk.id as idTask, tk.name as nameTask, g.id as idGoal, g.name as nameGoal,u.id as idUser, 
u.name as nameUser, tk.descriptions, tk.initialDate, tk.finalDate, t.id as idTeam, t.name as nameTeam
from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
join users as u on tk.idUser=u.id where tk.idCompany=1 and g.id=1;

/*Projeção de um objetivos e as tarefas por feitos (goalsTasksController)*/
select tk.id as idTask, tk.name as nameTask, g.id as idGoal, g.name as nameGoal,u.id as idUser, tk.done as doneTask, 
u.name as nameUser, tk.descriptions, tk.initialDate, tk.finalDate, t.id as idTeam, t.name as nameTeam
from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
join users as u on tk.idUser=u.id where tk.idCompany=1 and g.id=1 and tk.done=false;

/*Projeção de um objetivos e as tarefas por quantidade de tarefas (goalsTasksController)*/
select g.id as idGoal, g.name as nameGoal, count(*) as totalTask
from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
join users as u on tk.idUser=u.id where tk.idCompany=1 and g.id=1;

/*Projeção de um objetivos e as tarefas por quantidade de feitos (goalsTasksController)*/
select g.id as idGoal, g.name as nameGoal, count(*) as totalTaskDone
from tasks as tk join goals as g on tk.idGoal=g.id join teams as t on g.idTeam=t.id 
join users as u on tk.idUser=u.id where tk.idCompany=1 and g.id=1 and tk.done=true;

/*Projeção das tarefas e as subtarefas by tarefas(taskSubtasksController)*/
select t.id as idTask, t.name as nameTask, t.descriptions as descriptionsTask, t.done as doneTask,
t.initialDate as initialDateTask, t.finalDate as finalDateTask, st.id as idSubtask, st.name as nameSubtask,
st.descriptions as descriptionsSubtask, st.done as doneSubTask, st.initialDate as initialDateSubtask,
st.updatedAt as finalDateSubtask,u.id as idUser, u.name as nameUser, u.photo as userPhoto
from subtasks as st join tasks as t on st.idTask=t.id
join users as u on t.idUser=u.id where t.idCompany=1 and t.id=2;

/*Projeção do processo de todos os objetivos (projectionProcessGoalsTaskController)*/
select pgt.id as idProcess, tk.name as nameTask, tk.id as idTask, g.name as nameGoal, 
g.id as idGoal, t.name as nameTeam, t.id as idTeam,
 pgt.done, pgt.createdAt as initialDateProcess, pgt.updatedAt as finalDateProcess
from processgoalstask as pgt join tasks as tk on pgt.idTask=tk.id
join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
where pgt.idCompany=1;

/*Projeção do processo de um objetivo (projectionProcessGoalsTaskController)*/
select pgt.id as idProcess, tk.name as nameTask, tk.id as idTask, g.name as nameGoal, 
g.id as idGoal, t.name as nameTeam, t.id as idTeam,
 pgt.done, pgt.createdAt as initialDateProcess, pgt.updatedAt as finalDateProcess
from processgoalstask as pgt join tasks as tk on pgt.idTask=tk.id
join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
where pgt.idCompany=1 and g.id=1;

/*Projeção do processo de tarefas (projetionProcessTaskUsersController)*/
select ptu.id as idProcess, tk.name as nameTask, tk.id as idTask, g.name as nameGoal, 
g.id as idGoal, t.name as nameTeam, t.id as idTeam, u.id as idUser, u.name as nameUser,
ptu.done, ptu.createdAt as initialDateProcess, ptu.updatedAt as finalDateProcess,
tk.initialDate as initialDateTask,tk.finalDate as finalDateTask
from processtaskusers as ptu join tasks as tk on ptu.idTask=tk.id
join teams as t on ptu.idTeam=t.id join users as u on ptu.idUser=u.id
join processgoalstask as pgt on ptu.idProcessGoalsTask=pgt.id
join goals as g on pgt.idGoal=g.id 
where pgt.idCompany=1;

/*Projeção do processo de tarefas por feitos ou não feitos*/
select ptu.id as idProcess, tk.name as nameTask, tk.id as idTask, g.name as nameGoal, 
g.id as idGoal, t.name as nameTeam, t.id as idTeam, u.id as idUser, u.name as nameUser,
ptu.done, ptu.createdAt as initialDateProcess, ptu.updatedAt as finalDateProcess,
tk.initialDate as initialDateTask,tk.finalDate as finalDateTask, count(*) as totalTask
from processtaskusers as ptu join tasks as tk on ptu.idTask=tk.id
join teams as t on ptu.idTeam=t.id join users as u on ptu.idUser=u.id
join processgoalstask as pgt on ptu.idProcessGoalsTask=pgt.id
join goals as g on pgt.idGoal=g.id 
where pgt.idCompany=1 and ptu.done=false;

select * from tasks where idCompany=1;