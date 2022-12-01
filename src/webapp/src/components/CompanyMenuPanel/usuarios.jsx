import { Link, useNavigate, useParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import FormUsuarios from './usuarios/formUsuarios'
import ListaUsuarios from './usuarios/listaUsuarios'
import { useContext } from 'react'
import { ContextUser } from '../../context/ContextUser'
import { useState } from 'react'
import usersApi from '../../api/usersApi'

function Usuarios() {
    const { users, item, modelChange } = useContext(ContextUser)
    const [message, setMessage] = useState("Aqui vai uma mensagem")
    const { idCompany } = useParams()
    const [queryUpdate, setQueryUpdate] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

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
                setQueryUpdate((x) => !x)
                navigate({
                  pathname: `/empresas/${idCompany}`,
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
        <Tab.Group>
            <Tab.List className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-11/12 flex flex-row gap-2'>
                    <Tab className='nav-btn'>
                        {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
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
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                                className={
                                    selected ? 'bg-[#5500C3]' : 'bg-white text-black'
                                }
                            >
                                Cadrastamento
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
                            <FormUsuarios
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

export default Usuarios