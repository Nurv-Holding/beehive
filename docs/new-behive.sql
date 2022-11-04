/*Projeção de um objetivo os Krs (teamUsersProjectionController)*/
select g.id as idGoal, g.name as nameGoal, gk.id as idgoalsKr, gk.name as nameGoalsKr,
gk.descriptions as descriptionsGoalsKr, gk.from as fromGoalsKr, gk.to as toGoalsKr, gk.done as doneGoalsKr
from goalkrs as gk join goals as g on gk.idGoal=g.id where gk.idCompany=1;

/*Projeção de um objetivo de time os Krs (teamUsersProjectionController)*/
select gt.id as idGoalTeam, gt.name as nameGoalTeam, gtk.id as idgoalTeamsKr, gtk.name as nameGoalsTeamKr,
gtk.descriptions as descriptionsGoalsTeamKr, gtk.from as fromGoalsTeamKr, 
gtk.to as toGoalsTeamKr, gtk.done as doneGoalsTeamKr, t.id as idTeam, t.name as nameTeam
from processgoalsteams as pgt join goalsteams as gt on pgt.idGoalsTeam=gt.id
join teams as t on pgt.idTeam=t.id 
join goalTeamKrs as gtk on gtk.idGoalsTeam=gt.id where gtk.idCompany=1;