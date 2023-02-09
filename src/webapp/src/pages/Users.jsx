import { Link} from 'react-router-dom'
import { useContext } from 'react'
import { ContextCompany } from '../context/ContextCompany'
import ListUsersOk from "../components/CompanyMenuPanel/Users/ListUsersOkrs"

function Users() {
    const { 
        idCompany, 
        newTeamsUser, 
        newGoalUsersAllKrs, 
        newAllTeamsAndUsers,
        goalUsers
    } = useContext(ContextCompany)

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

            <ListUsersOk 
                users={newTeamsUser} 
                newGoalUsersAllKrs={newGoalUsersAllKrs}
                newAllTeamsAndUsers={newAllTeamsAndUsers}
                goalUsers={goalUsers}
            />
        </div>
    )
}

export default Users