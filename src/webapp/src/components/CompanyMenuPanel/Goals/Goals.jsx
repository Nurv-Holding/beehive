import { useContext } from 'react'
import { ContextUser } from '../../../context/ContextUser'
import GoalsList from './GoalsList'

function Goals() {
    const { companyGoals, goalAndTeams, krs, goalKrs } = useContext(ContextUser)
<<<<<<< HEAD
    // const [message, setMessage] = useState("Aqui vai uma mensagem")
    // const navigate = useNavigate()
    // const [searchParams, setSearchParams] = useSearchParams()
    // const token = localStorage.getItem("token")
    // const payload = token ? jwtDecode(token) : null

    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     searchParams.delete('update')
    //     setSearchParams(searchParams)

    //     if (Object.values(item).length === 0 || item.name === "" || item.descriptions === "")
    //         setMessage("Os campos precisam ser preenchidos")
    //     else {

    //         goalsApi.create(idCompany, { ...item, author: payload?.id })
    //             .then(() => {
    //                 setMessage("Cadastro realizado")
    //                 navigate({
    //                     pathname: `/company/${idCompany}`,
    //                     search: `?update=${true}`
    //                 })

    //                 searchParams.delete("update")

    //             })
    //             .catch((error) => {
    //                 console.error(error)
    //                 setMessage(error)
    //             })
    //     }


    // }
=======
>>>>>>> 244e2115c2593744479eaade7a73edd5443bf19b

    return (
        <div className='w-full h-full flex flex-col items-center mt-8'>
            <GoalsList
                companyGoals={companyGoals}
                goalKrs={goalKrs}
                goalAndTeams={goalAndTeams}
                krs={krs}
            />
        </div>
    )
}

export default Goals