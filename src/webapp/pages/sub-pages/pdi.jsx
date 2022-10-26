import { Link } from 'react-router-dom'

function pdi() {
  return (
    <div id='pdi' className='container-team-management-pdi'>
      <div className='profile-container-pdi'>
        <div className='profile-photo-pdi'>
          <img src="https://thispersondoesnotexist.com/image"/>
        </div>

        <div className='flex flex-col self-center cursor-default'>
          <div>
            <p className='profile-name'>Laura Beatriz</p>
            <p className='text-desc'>Customer Sucess</p>
            <p className='text-desc mb-0.5'>Team Leader</p>
          </div>
        </div>
      </div>

      <div className='container-set'>
        <div className='container-percentage'>
          <div className='percentage-set'>
            <div className='percentage-bar'>
              <p className='text-desc'>Okrs Pessoais</p>

              <div className='container-infos-percentage'>
                <div className='percentage-first'></div>
              </div>

              <p className='text-desc'>3 de 4 feitos</p>
            </div>

            <div className='percentage-bar'>
              <p className='text-desc'>Okrs do time</p>

              <div className='container-infos-percentage'>
                <div className='percentage-second'></div>
              </div>

              <p className='text-desc'>4 de 4 feitos</p>
            </div>

            <div className='percentage-bar'>
              <p className='text-desc'>Okrs dos liderados</p>

              <div className='container-infos-percentage'>
                <div className='percentage-third'></div>
              </div>

              <p className='text-desc'>2 de 4 feitos</p>
            </div>

            <div className='mt-2'>
              <h1 className='container-title-pdi'>16</h1>
              <p className='text-desc'>Check-ins pendentes</p>
            </div>
          </div>
        </div>

        <h1 className='container-title mt-4'>Okrs Pessoais</h1>
        <div className='container-general'>
          <div className='section-infos-general'>
            <h1 className='container-title-general'>Estudar Inglês</h1>

            <p className='text-desc-general'>Montar dashboard</p>
            <p className='text-desc-general'>Montar dashboard</p>
            <p className='text-desc-general'>Montar dashboard</p>
          </div>

          <div className='section-infos-general'>
            <h1 className='container-title-general'>Estudar Jogos de tabuleiro</h1>

            <p className='text-desc-general'>Montar pesquisa</p>
            <p className='text-desc-general'>Montar pesquisa</p>
            <p className='text-desc-general'>Montar pesquisa</p>
          </div>
        </div>

        <h1 className='container-title mt-4'>Okrs Relacionais</h1>
        <div className='container-general'>
          <div className='section-infos-general'>
            <h1 className='container-title-general'>Estudar História da Inglaterra</h1>

              <p className='text-desc-general'>Montar dashboard</p>
              <p className='text-desc-general'>Montar dashboard</p>
              <p className='text-desc-general'>Montar dashboard</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default pdi;