import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import Modal from '../objetivos/components/Modal'

import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'

function ListaTimes({ teams }) {
  const { users } = useContext(ContextUser)

  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='container-table-grid-team'>
        <table class="table-auto w-full">

          <thead>
            <tr>
              <th className='container-title-grid'>Time</th>
              <th className='container-title-grid'>Descrição</th>
              <th className='container-title-grid'>Data de criação</th>
            </tr>
          </thead>

          <tbody className='text-center'>
            {(teams || []).map((team) => {
              return (
                <>
                  <tr>
                    <td onClick={openModal} className='cursor-pointer'> {team.name} </td>

                    <td> {team.descriptions} </td>
                    <td>{team.createdAt}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h1 className='text-xl mb-4'>Nome do time aqui</h1>
          <div className='flex flex-row justify-between'>


            <div className='w-2/4'>
              <span className='text-gray-500'>Lista de Integrantes</span>
              <div className='w-[80%] flex flex-col bg-gray-300 p-1 rounded-md'>
                {(users || []).map((user) => {
                  return (
                    <span className='my-0.5 overflow-hidden'>{user.name}</span>
                  )
                })}
              </div>
            </div>

            <form className='w-2/4 flex flex-col'>
              <span className='text-gray-500'>Adicionar Integrante</span>
              <div className='input-and-label-container'>
                <select name="user" id="users" className="input-style">
                  <option disabled selected>Selecionar Integrante</option>
                  {(users || []).map((user) => {
                    return (
                      <option key={user.id} value={user.id}> {user.name} </option>
                    )
                  })}
                </select>
              </div>

              <button className='submit-button mt-3' type="submit">Enviar</button>
              <span> Mensagem aqui </span>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default ListaTimes