import { Link } from 'react-router-dom'

function compromisses() {
    return (
      <div className='grid-row grid-compromisses'>
        <div className='flex flex-col self-center'>
          <div>
            <h1 className='container-title'>Compromissos Hoje</h1>
            <p className='text-desc mt-2'>08h Daily com o time</p>
            <p className='text-desc'>14h Reunião com o cliente</p>
          </div>
        </div>
      </div>
    )
}

export default compromisses