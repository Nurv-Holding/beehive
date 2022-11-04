/*Projeção de um objetivo os Krs (projectionGoalKrsController)*/
select g.id as idGoal, g.name as nameGoal, gk.id as idgoalsKr, gk.name as nameGoalsKr,
gk.descriptions as descriptionsGoalsKr, gk.from as fromGoalsKr, gk.to as toGoalsKr, gk.done as doneGoalsKr
from goals as g left join goalKrs as gk on gk.idGoal=g.id where gk.idCompany=1 and g.id=3;

/*Projeção de um objetivo de time os Krs (teamUsersProjectionController)*/
select gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.from as fromGoalsTeamKr, 
gtk.to as toGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processGoalsTeams as pgt join goalsTeams as gt on pgt.idGoalsTeam=gt.id
join teams as t on pgt.idTeam=t.id 
join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where gtk.idCompany=1;

select * from processGoalsTeams;