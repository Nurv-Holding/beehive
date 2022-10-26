import { Link } from 'react-router-dom'

function tasks() {
    return (
        <div className='grid-row grid-general min-h-[150px]'>
        <h1 className='container-title'>Tarefas do dia</h1>

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

export default tasks