import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaTarefas() {
    return (
        <div className='flex flex-col items-center'>
    <div className='container-table-objectives-list-times'>
      <div>
        <h1 className='container-title-grid'>Nome do time</h1>

        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
        <p className='text-desc-grid'>Time X</p>
      </div>

      <div>
        <h1 className='container-title-grid'>Descrição</h1>

          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
          <p className='text-desc-grid'>Time X</p>
        </div>

        <div>
          <h1 className='container-title-grid'>Data Inicial</h1>
          
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
          <p className='text-desc-grid'>12/10/22</p>
        </div>

        <div>
          <h1 className='container-title-grid'>Data final</h1>
          
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
          <p className='text-desc-grid'>31/12/22</p>
        </div>
    </div>
    </div>
    )
}

export default listaTarefas