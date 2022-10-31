import { Link } from 'react-router-dom'

function objectivesList() {
  return (
    <>
      <main className='w-full flex flex-col items-center mt-4'>
          <div className='container-team-management'>
            <div className='container-table-objectives-list'>
              <div>
                <h1 className='container-title-grid'>Objetivo</h1>


                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid '>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
                <br />
                <Link to="/objetivo">
                  <span className='text-desc-grid'>Aprender algo</span>
                </Link>
              </div>

              <div>
                <h1 className='container-title-grid'>Data inicial</h1>

                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                  <p className='text-desc-grid'>22/10/22</p>
                </div>

                <div>
                  <h1 className='container-title-grid'>Data Final</h1>
                  
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                  <p className='text-desc-grid'>13/12/22</p>
                </div>
            </div>
          </div>
      </main>
    </>
  );
}

export default objectivesList;