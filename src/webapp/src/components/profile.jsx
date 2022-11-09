import { Link } from 'react-router-dom'

function profile() {
    return (
        <div className='grid-row'>
          <div className='profile-photo'>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/56334746_1964324720362541_405342314563633152_n.jpg?ccb=11-4&oh=01_AdTbHSJu8SH0SKp8dobO9CldsmpFvJlj9FuQfXiFXGPmJg&oe=6378C4B1"/>
          </div>

          <div className='flex flex-col self-center cursor-default'>
            <div>
              <p className='profile-name'>Eduardo Rigotto</p>
              <p className='text-desc mb-4'>Design Thinking</p>
              <p className='text-desc mb-0.5'>Administrator</p>
              <p className='text-desc'>exemplo@gmail.com</p>
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