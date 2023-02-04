<<<<<<< HEAD
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
=======
import { Link, useParams } from 'react-router-dom'
>>>>>>> 244e2115c2593744479eaade7a73edd5443bf19b
import ListaUsuarios from './ListUsers'
import { useState } from 'react'
import usersApi from '../../../api/usersApi'
import { useEffect } from 'react'

function Users() {
<<<<<<< HEAD
    // const { item } = useContext(ContextUser)
    // const [message, setMessage] = useState("")
    const { idCompany } = useParams()
    const [users, setUsers] = useState([])
    // const navigate = useNavigate()
    // const [searchParams, setSearchParams] = useSearchParams()
=======
    const { idCompany } = useParams()
    const [users, setUsers] = useState([])
>>>>>>> 244e2115c2593744479eaade7a73edd5443bf19b

    useEffect(() => {
        handlerUsers()

    }, [idCompany])

    const handlerUsers = async () => {
        const { data } = await usersApi.getAllByCompany(idCompany)
        setUsers(data)
    }

    return (
        <div className='flex flex-row justify-between'>
            <div className='h-full-side-bar-calc w-14 bg-gray-200 flex flex-col items-center py-2'>
                <Link
                   to="/formuser" className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-strong hover:text-white flex justify-center text-center items-center font-bold text-xl px-2"
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