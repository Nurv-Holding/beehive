import { useContext, useEffect, useState } from "react"
import teamsUsersApi from "../api/teamsUsersApi"
import { ContextCompany } from "../context/ContextCompany"
import NewModal from "./CompanyMenuPanel/Goals/components/NewModal"

const ModalMembersTeam = ({idRef, idTeam, users}) => {
    const { idCompany, teams } = useContext(ContextCompany)
    const [allTeamsAndUsers, setAllTeamsAndUsers] = useState([])
    const [team, setTeam] = useState({})

    useEffect(() => {
        const handleAllTeamsAndUsers= async () => {
            const { data } = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
            setAllTeamsAndUsers(() => {
                return data?.filter(f => f.idTeam === idTeam)
            })
    
            setTeam(() => {
                return teams.find(f => f.id === idTeam)
            })
        }

        handleAllTeamsAndUsers()

    },[idTeam, idCompany, teams])



    return(
        <NewModal idRef={idRef}>
            <div className="p-8 flex flex-col justify-center items-center gap-4 w-full">
                <h4 className="text-center uppercase text-bee-strong-1 text-3xl font-bold"> {team?.name} </h4>
                <span className="text-bee-blue-clean text-xl font-bold">Líder: {(users || []).filter(f => f.id === team?.leader)[0]?.name} </span>

                <div className="gap-4">
                    <ul className="text-black font-medium flex flex-col gap-1">
                        {(allTeamsAndUsers || []).length === 0?
                        "Ainda não existe integrantes"
                        :allTeamsAndUsers.map((member) => {
                            return(
                                <li> {member?.nameUser} </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </NewModal>
    )
}

export default ModalMembersTeam