import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'

function listaUsuarios() {
    return (
        <div className='flex flex-col items-center'>
    <div className='container-table-objectives-list'>
      <div>
        <h1 className='container-title-grid'>Nome</h1>

        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
        <p className='text-desc-grid'>Maria</p>
      </div>

      <div>
        <h1 className='container-title-grid'>Cargo</h1>

          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
          <p className='text-desc-grid'>Customer Sucess</p>
        </div>

        <div>
          <h1 className='container-title-grid'>Email</h1>
          
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
          <p className='text-desc-grid'>maria@gmail.com</p>
        </div>
    </div>
    </div>
    )
}

export default listaUsuarios