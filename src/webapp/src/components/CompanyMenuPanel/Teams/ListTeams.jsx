import { Link, useNavigate } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import Modal from '../Goals/components/Modal'

import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'
import teamsUsersApi from '../../../api/teamsUsersApi'

function ListTeams({ teams }) {
  const { usersByCompany, teamUsers, idCompany } = useContext(ContextUser)
  const [idTeam, setIdTeam] = useState(null)
  const [idUser, setIdUser] = useState(null)
  const [queryUpdate, setQueryUpdate] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
 
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal(idTeam) {
    setIsOpen(true)
    setIdTeam(idTeam)
  }

  const addUserInTeam = async (event) => {
    event.preventDefault()

    const teamUsers = await teamsUsersApi.getAll(idCompany)

    const hasUser = (teamUsers?.data || []).filter(e => e.idUser === idUser && e.idTeam === idTeam)

    if(hasUser.length !== 0){
      setMessage("Usuário já adicionado")

    }else{
      teamsUsersApi.create(idCompany, {idUser, idTeam})
      .then(() => {
        setMessage("Usuário Adicionado!")
        setQueryUpdate((x) => !x)
        navigate({
          pathname: `/company/${idCompany}`,
          search: `?update=${queryUpdate}`
        })
        
      })
      .catch((error) => {
        console.error(error)
        setMessage("Algo deu errado!")
      })
    }
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
                    <td onClick={() => openModal(team.id)} className='cursor-pointer'> {team.name} </td>

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
                {(teamUsers || []).filter(e => e.idTeam === idTeam).map((user) => {
                  return (
                    <span className='my-0.5 overflow-hidden'>{user.nameUser}</span>
                  )
                })}
              </div>
            </div>

            <form onSubmit={addUserInTeam} className='w-2/4 flex flex-col'>
              <span className='text-gray-500'>Adicionar Integrante</span>
              <div className='input-and-label-container'>
                <select onChange={({ target }) => setIdUser(parseInt(target.value))} name="user" id="users" className="input-style">
                  <option disabled selected>Selecionar Integrante</option>
                  {(usersByCompany || []).map((user) => {
                    return (
                      <option key={user.id} value={user.id}> {user.name} </option>
                    )
                  })}
                </select>
              </div>

              <button className='submit-button mt-3' type="submit">Enviar</button>
              <span> {message} </span>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default ListTeams