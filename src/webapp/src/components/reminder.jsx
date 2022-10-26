import { Link } from 'react-router-dom'

function reminder() {
    return (
      <div className='grid-row grid-general min-h-[250px]'>
        <h1 className='container-title'>Lembretes</h1>

        <div className='general'>
            <Link to="/historico">
                <span>Montar tal coisa</span>
            </Link>
        </div>

        <div className='general'>
            <Link to="/historico">
                <span>Montar tal coisa</span>
            </Link>
        </div>
      </div>
    )
}

export default reminder