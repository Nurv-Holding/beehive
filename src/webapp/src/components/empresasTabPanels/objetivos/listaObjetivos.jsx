import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaObjetivos({ goals }) {
    return (
    <div className='flex flex-col items-center'>
      <div className='container-table-objectives-list-times'>
        {(goals || []).map((goal) => {
          return(
            <>
            <div>
              <h1 className='container-title-grid'>Nome do time</h1>
              <p className='text-desc-grid'> {goal.name} </p>
            </div>
            <div>
              <h1 className='container-title-grid'>Descrição</h1>
                <p className='text-desc-grid'> {goal.descriptions} </p>
              </div>
              <div>
                <h1 className='container-title-grid'>Data Inicial</h1>
                <p className='text-desc-grid'> {goal.initialDate} </p>
              </div>
              <div>
                <h1 className='container-title-grid'>Data final</h1>
                <p className='text-desc-grid'> {goal.finalDate} </p>
              </div>
            </>
          )
        })}

      </div>
    </div>
    )
}

export default listaObjetivos