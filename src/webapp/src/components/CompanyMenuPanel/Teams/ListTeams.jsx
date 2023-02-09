import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import Modal from '../Goals/components/Modal'
import { useContext } from 'react'
import { ContextCompany } from '../../../context/ContextCompany'
import teamsUsersApi from '../../../api/teamsUsersApi'
import ModalMembersTeam from '../../ModalMembersTeam'

function ListTeams({ allTeams, users, teamsByKrs, teamByTeam, allTeamsAndUsers }) {
  const { usersByCompany, teamUsers, idCompany } = useContext(ContextCompany)
  const [idTeam, setIdTeam] = useState(null)
  const [idUser, setIdUser] = useState(null)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  const addUserInTeam = async (event) => {
    event.preventDefault()

    searchParams.delete('update')
    setSearchParams(searchParams)

    const teamUsers = await teamsUsersApi.getAll(idCompany)

    const hasUser = (teamUsers?.data || []).filter(e => e.idUser === idUser && e.idTeam === idTeam)

    if (hasUser.length !== 0) {
      setMessage("Usuário já adicionado")

    } else {
      teamsUsersApi.create(idCompany, { idUser, idTeam })
        .then(() => {
          setMessage("Usuário Adicionado!")
          navigate({
            pathname: `/company/${idCompany}`,
            search: `?update=${true}`
          })

        })
        .catch((error) => {
          console.error(error)
          setMessage("Algo deu errado!")
        })
    }
  }

  return (
    <div className='flex flex-row w-full'>
      <div className='h-full-side-bar-calc w-14 bg-gray-200 flex gap-2 flex-col items-center py-2'>
        <Link
          to={`/company/${idCompany}/formteam`} className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-strong hover:text-white flex justify-center text-center items-center font-bold text-xl px-2"
        >
          +
        </Link>

        <Link
          to={`/company/${idCompany}/teamlist`} className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-strong hover:text-white flex justify-center text-center items-center font-bold text-sm px-2"
        >
          Lista
        </Link>
      </div>

      <div className='w-full'>
        <div
          className='login-bg h-44 w-full'
        >
        </div>

        <h1 className='text-3xl text-bee-blue-clean font-bold text-center p-4'>OKRs</h1>

        <div className='grid grid-cols-3 gap-3 w-[90%] mx-auto px-3 mb-4'>
          {(teamByTeam || []).map((team) => {
            return (
              <>
                <ModalMembersTeam idRef={"members"} idTeam={idTeam} users={users} />
                <div className='text-center bg-white p-4 flex flex-col items-center w-full aspect-square overflow-y-scroll rounded-3xl shadow-lg'>
                  <div className="cursor-pointer flex flex-col items-center justify-center">
                    <button onClick={() => setIdTeam(team?.idTeam)} className="text-bee-strong-1 text-xl font-bold text-center uppercase" data-bs-toggle="modal" data-bs-target="#members">
                      {team.nameTeam}
                    </button>

                    <span className="text-bee-blue-clean text-xs mt-2 font-bold">líder</span>
                    <div className='w-full text-base font-bold text-black text-center'>
                      {(users || []).filter(user => user.id === team.leader)[0]?.name}
                    </div>
                    <span className="text-bee-blue-clean text-xs mt-2 font-bold">Lista de Objetivos</span>
                    <div className='grid grid-cols-2 gap-4 w-full'>
                      {(allTeams || []).filter(e => e.idTeam === team.idTeam).map((goalTeam) => {
                        return (
                          <Disclosure>
                            <div className="w-full py-2">
                              <Disclosure.Button>
                                <div className="bg-white cursor-pointer rounded-xl">
                                  <h1 className='text-black uppercase text-center font-bold text-[12px]'>
                                    {goalTeam.nameGoalTeam}
                                  </h1>
                                </div>
                              </Disclosure.Button>
                              {(teamsByKrs || []).filter(f => f.idGoalTeam === goalTeam.idGoalTeam).map((kr) => {
                                return (
                                  <Disclosure.Panel className="bg-bee-strong-1 my-1 p-2 uppercase text-[10px] rounded-xl text-black shadow-lg font-bold cursor-default">
                                    {kr.nameKr}
                                  </Disclosure.Panel>
                                )
                              })}
                            </div>
                          </Disclosure>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal}>
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

            <button className='submit-button mt-3' type="submit">Adicionar</button>
            <span className={`${message === "Aqui vai uma mensagem" ? 'hidden': 'block'}`}> {message} </span>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default ListTeams