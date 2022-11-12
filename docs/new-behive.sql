/*Projeção de um objetivo os Krs (projectionGoalKrsController)*/
select g.id as idGoal, g.name as nameGoal, gk.id as idgoalsKr, gk.name as nameGoalsKr, gk.updatedAt as updateGoalsTasks,
gk.descriptions as descriptionsGoalsKr, gk.toQuarterly as toQuarterlyGoalKrs,gk.fromQuarterly as fromQuarterlyGoalKrs, 
gk.toYearly as toYearlyGoalsKr,gk.fromYearly as fromYearlyGoalsKr, gk.done as doneGoalsKr
from goals as g left join goalKrs as gk on gk.idGoal=g.id where gk.idCompany=1 and g.id=3;

/*Projeção de um objetivo e os objetivos de times (projectionGoalsTeam)*/
select g.id as idGoal, g.name as nameGoal, gt.id as idGoalTeams, 
gt.name as nameGoalTeams, gt.descriptions as goalTeamsDescriptions
from goalsTeams as gt join goals as g on gt.idGoal=g.id where gt.idCompany=1 and g.id=2;

/*Projeção de um objetivo com os times (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and pgt.idGoal=2 group by pgt.idTeam;

/*Projeção de um objetivo de um time os seus Krs (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, 
gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.toQuarterly as toQuarterlyGoalsTeamKr,
gtk.fromQuarterly as fromQuarterlyGoalsTeamKr, gtk.fromYearly as fromYearlyGoalsTeamKr, 
gtk.toYearly as toYearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and pgt.idGoal=2;

/*Projeção de um objetivo de um time (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, 
gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.toQuarterly as toQuarterlyGoalsTeamKr,
gtk.fromQuarterly as fromQuarterlyGoalsTeamKr, gtk.fromYearly as fromYearlyGoalsTeamKr, 
gtk.toYearly as toYearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id  where pgt.idCompany=1 and pgt.idGoal=2 group by pgt.idGoalsTeam;

/*Projeção de um objetivo de um time com os krs (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt join goalsTeams as gt on pgt.idGoalsTeam=gt.id
join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and pgt.idGoal=2 group by gtk.id;

/*Projeção de um objetivo de time os Krs com um time (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, 
gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.toQuarterly as toQuarterlyGoalsTeamKr,
gtk.fromQuarterly as fromQuarterlyGoalsTeamKr, gtk.fromYearly as fromYearlyGoalsTeamKr, 
gtk.toYearly as toYearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id  where pgt.idCompany=1 and t.id=1 group by pgt.idTeam;

/*Projeção de historico de krs de objetivo de time(progectionHistoryGoalTeamKrByKr)*/
select gtk.id as idGoalsTeamKr, gtk.name as nameGoalsTeamKr, gtk.updatedAt as updateGoalTeamKr, 
gt.id as idGoalTeam, gt.name as nameGoalTeam, pgt.id as idProcessGoalsTeam, hgtk.id as idHistoryGoalTeamsKr,
hgtk.quaPercentage as quaPercentageHistory, hgtk.yeaPercentage as yeaPercentageHistory
from historyGoalsTeamKrs as hgtk join goalTeamKrs as gtk on hgtk.idGoalsTeamKr=gtk.id
join processGoalsTeams as pgt on hgtk.idProcessGoalTeam=pgt.id
join goalsTeams as gt on pgt.idGoalsTeam=gt.id;

/*Projeção de historico de krs(historyGoalsKrsController)*/
select hgk.id as idHistoryGoalKrs, hgk.idGoal, hgk.idGoalKr, hgk.updatedAt as updateHistory,
hgk.quaPercentage, hgk.yeaPerventage, gk.name as nameGoalKr
from historyGoalKrs as hgk join goals as g on hgk.idGoal=g.id
join goalKrs as gk on hgk.idGoalKr=gk.id;

/*Projeção de times e integrantes(historyGoalsKrsController)*/
select tu.id as idTeamUser, u.id as idUser, u.name as nameUser, u.occupation as occupationUser,
u.email as emailUser, u.photo as photoUser, p.name as profile, t.id as idTeam, t.name as nameTeam
from teamUsers as tu join users as u on tu.idUser=u.id
join profiles as p on u.idProfile=p.id
join teams as t on tu.idTeam=t.id;

/*Projeção de tarefas e usuários do time(historyGoalsKrsController)*/
select u.id as idUser, u.name as nameUser, u.email as emailUser, p.name as profile,
tk.id as idTask, tk.name as nameTask, tk.finalDate, tku.id as idTaskUser, tku.done, tu.id as idTeamUser,
gtk.id as idGoalsTeamKr, gtk.name as nameGoalsTeamKr, gt.id as idGoalTeam, gt.name as nameGoalsTeam,
t.id as idTeam, t.name as nameTeam from taskUsers as tku join tasks as tk on tku.idTask=tk.id
join goalTeamKrs as gtk on tk.idGoalsTeamKr=gtk.id join goalsTeams as gt on gtk.idGoalsTeam=gt.id
left join teamUsers as tu on tku.idTeamUser=tu.id left join users as u on tu.idUser=u.id
left join profiles as p on u.idProfile=p.id left join teams as t on tu.idTeam=t.id 
where tku.idCompany=1;  

select * from goalTeamKrs;