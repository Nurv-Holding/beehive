import { json } from 'react-router-dom';
import TaskPercentage from './TaskPercentage';

function TeamObjectivesTeams({ teams=null, goalTeamsKrs }) {

  return (
    <>
      {(goalTeamsKrs || []).map((goalTeamsKr) => {
        return (
          <>
            <div className='flex flex-row items-center justify-around w-full bg-white p-4 mb-4 rounded-lg cursor-pointer'>
              <div className='flex items-center'>
                <span> {goalTeamsKr.nameTeam} </span>
              </div>

              <div className='percentage-container-disclosure w-[20%]'>
                <div className='percentage-bar-disclosure w-[45%]'></div>
              </div>

              <TaskPercentage
              />
            </div>
          </>
        )
      })}
    </>
  );
}

export default TeamObjectivesTeams;