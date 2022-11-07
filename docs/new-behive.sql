/*Projeção de um objetivo os Krs (projectionGoalKrsController)*/
select g.id as idGoal, g.name as nameGoal, gk.id as idgoalsKr, gk.name as nameGoalsKr, gk.updatedAt as updateGoalsTasks,
gk.descriptions as descriptionsGoalsKr, gk.quarterly as QuarterlyGoalKrs, gk.yearly as yearlyGoalsKr, gk.done as doneGoalsKr
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
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and pgt.idGoal=2;

/*Projeção de um objetivo de um time (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and pgt.idGoal=2 group by pgt.idGoalsTeam;

/*Projeção de um objetivo de um time com os krs (projectionGoalTeamKrsController)*/
select pgt.id as idProcessGoalsTeams, gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt join goalsTeams as gt on pgt.idGoalsTeam=gt.id
join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and pgt.idGoal=2 group by gtk.id;

/*Projeção de um objetivo de time os Krs com um time (projectionGoalTeamKrsController)*/
select gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.quarterly as quarterlyGoalsTeamKr, 
gtk.yearly as yearlyGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt left join goalsTeams as gt on pgt.idGoalsTeam=gt.id
left join goals as g on pgt.idGoal=g.id join teams as t on pgt.idTeam=t.id 
left join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where pgt.idCompany=1 and t.id=1 group by pgt.idTeam;

select * from goalsteams;