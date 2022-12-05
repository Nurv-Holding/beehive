import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

function profile() {
  const token = localStorage.getItem("token")
  const payload = token? jwtDecode(token): null

    return (
        <div className='grid-row'>
          <div className='profile-photo'>
            <img src="https://thispersondoesnotexist.com/image"/>
          </div>

          <div className='flex flex-col self-center cursor-default'>
            <div>
              <p className='profile-name'>{payload.name}</p>
              <p className='text-desc mb-0.5'>{payload.occupation}</p>
              <p className='text-desc'>{payload.email}</p>
            </div>

            <div className='profile-nav mt-4'>
              <Link to="/alterarPerfil">
                <span>Alterar Perfil</span>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default profile