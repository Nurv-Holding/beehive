import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header';
import { ContextUser } from '../context/ContextUser';

function ObjectivesList() {
  const { goals } = useContext(ContextUser)

  return (
    <>
      <Header />

      <main className='w-full flex flex-col items-center mt-4'>
          <div className='container-team-management'>
            <div className='container-table-objectives-list'>
              {(goals || []).map((goal) => {
                return(
                  <>
                  <div>
                    <h1 className='container-title-grid'>Objetivo</h1>
                    <Link to={`/objetivo/${goal.id}`}>
                      <span className='text-desc-grid'> {goal.name} </span>
                    </Link>
                    <br />
                  </div>
                  <div>
                    <h1 className='container-title-grid'>Data inicial</h1>
                    <p className='text-desc-grid'> {goal.initialDate} </p>
                  </div>
                  <div>
                    <h1 className='container-title-grid'>Data Final</h1>
                    <p className='text-desc-grid'> {goal.finalDate} </p>
                  </div>
                  </>
                )
              })}
   
            </div>
          </div>
      </main>
    </>
  );
}

export default ObjectivesList;