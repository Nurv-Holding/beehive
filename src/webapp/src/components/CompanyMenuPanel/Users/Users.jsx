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

    }, [idCompany])

    const handlerUsers = async () => {
        const { data } = await usersApi.getAllByCompany(idCompany)
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
        <div className='flex flex-row justify-between'>
            <div className='h-full-side-bar-calc w-24 bg-gray-200 flex flex-col items-center p-4 gap-2'>
                <Link
                   to="/formuser" className="w-full aspect-square rounded-lg bg-white text-[#5500C3] hover:bg-[#5500C3] hover:text-white flex justify-center text-center items-center text-4xl p-2"
                >
                    +
                </Link>
            </div>

            <ListaUsuarios users={users} />

            {/* <FormUser
            modelChange={modelChange}
            message={message}
            handleSubmit={handleSubmit}
                /> */}

        </div>
    )
}

export default Users