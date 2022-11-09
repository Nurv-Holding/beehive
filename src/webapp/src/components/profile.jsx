import { Link } from 'react-router-dom'

function profile() {
    return (
        <div className='grid-row'>
          <div className='profile-photo'>
            <img src="https://thispersondoesnotexist.com/image"/>
          </div>

          <div className='flex flex-col self-center cursor-default'>
            <div>
              <p className='profile-name'>Pedro Augusto</p>
              <p className='text-desc mb-4'>Team Leader</p>
              <p className='text-desc mb-0.5'>Administrator</p>
              <p className='text-desc'>pedroaugusto@gmail.com</p>
            </div>

            <div className='profile-nav mt-8'>
              <Link to="/historico">
                <span>Histórico</span>
              </Link>
            </div>

            <div className='profile-nav mt-0.5'>
              <Link to="/alterarPerfil">
                <span>Alterar Perfil</span>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default profile