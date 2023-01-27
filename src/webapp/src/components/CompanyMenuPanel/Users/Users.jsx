import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ListUsersOkrs from './ListUsersOkrs'
import { useContext } from 'react'
import { ContextCompany } from '../../../context/ContextCompany'
import { useState } from 'react'
import usersApi from '../../../api/usersApi'
import { useEffect } from 'react'

function Users() {
    const { item, idCompany, newTeamsUser } = useContext(ContextCompany)
    const [message, setMessage] = useState("")
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

    return (
        <div className='flex flex-row justify-between'>
            <div className='h-full-side-bar-calc w-14 bg-gray-200 gap-2 flex flex-col items-center py-2'>
                <Link
                    to={`/company/${idCompany}/formuser`} className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-strong hover:text-white flex justify-center text-center items-center font-bold text-xl px-2"
                >
                    +
                </Link>

                <Link
                    to={`/company/${idCompany}/userslist`} className="w-10 aspect-square rounded-lg bg-white text-bee-blue-clean hover:bg-bee-blue-strong hover:text-white flex justify-center text-center items-center font-bold text-sm px-2"
                >
                    Lista
                </Link>
            </div>

            <ListUsersOkrs users={newTeamsUser} />
        </div>
    )
}

export default Users