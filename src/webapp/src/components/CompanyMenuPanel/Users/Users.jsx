import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormUser from './FormUser'
import ListaUsuarios from './ListUsers'
import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'
import { useState } from 'react'
import usersApi from '../../../api/usersApi'
import { useEffect } from 'react'

function Users() {
    const { item, modelChange } = useContext(ContextUser)
    const [message, setMessage] = useState("")
    const { idCompany } = useParams()
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        handlerUsers()

    },[idCompany])

    const handlerUsers = async () => {
        const {data} = await usersApi.getAllByCompany(idCompany)
        setUsers(data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        if (Object.keys(item).length === 0 &&
            item.name === "" || item.email === "" ||
            item.occupation === "" || item.password === "" ||
            item.repeatPassword === "") {
            setMessage("Precisa preencher os campos vazios")

        } else if (item.password !== item.repeatPassword) {
            setMessage("Senhas precisam ser as mesmas")

        } else {
            usersApi.createEmployee(idCompany, { ...item, repeatPassword: undefined })
            .then(() => {
                setMessage("Usuário criado com sucesso")
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
        <Tab.Group>
            <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12 flex flex-row gap-2'>
                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            <button onClick={() => setMessage("")}
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Usuários
                            </button>
                        )}
                    </Tab>


                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            <button onClick={() => setMessage("")}
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Cadrastrar
                            </button>
                        )}
                    </Tab>
                </div>
            </Tab.List>

            <div className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12'>

                    <Tab.Panels>
                        <Tab.Panel className='container-empresas'>
                            <ListaUsuarios users={users} />
                        </Tab.Panel>

                        <Tab.Panel className='container-empresas'>
                            <FormUser
                                modelChange={modelChange}
                                message={message}
                                handleSubmit={handleSubmit}
                            />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </div>
        </Tab.Group>
    )
}

export default Users