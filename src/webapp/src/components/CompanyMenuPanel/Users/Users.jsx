import { Link, useParams } from 'react-router-dom'
import ListaUsuarios from './ListUsers'
import { useState } from 'react'
import usersApi from '../../../api/usersApi'
import { useEffect } from 'react'

function Users() {
    const { idCompany } = useParams()
    const [users, setUsers] = useState([])

    useEffect(() => {
        const handlerUsers = async () => {
            const { data } = await usersApi.getAllByCompany(idCompany)
            setUsers(data)
        }

        handlerUsers()

    }, [idCompany])



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