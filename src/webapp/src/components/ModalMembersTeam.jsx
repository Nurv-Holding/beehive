import { useContext, useEffect, useState } from "react"
import teamsUsersApi from "../api/teamsUsersApi"
import { ContextUser } from "../context/ContextUser"
import NewModal from "./CompanyMenuPanel/Goals/components/NewModal"

const ModalMembersTeam = ({idRef, idTeam, users}) => {
    const { idCompany, teams } = useContext(ContextUser)
    const [allTeamsAndUsers, setAllTeamsAndUsers] = useState([])
    const [team, setTeam] = useState({})

    useEffect(() => {
        handleAllTeamsAndUsers()

    },[idTeam])

    const handleAllTeamsAndUsers= async () => {
        const { data } = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
        setAllTeamsAndUsers(() => {
            return data?.filter(f => f.idTeam === idTeam)
        })

        setTeam(() => {
            return teams.find(f => f.id === idTeam)
        })
    }

    return(
        <NewModal idRef={idRef}>
            <div className="p-8 flex flex-col justify-center items-center gap-4">
                <h4 className="text-center uppercase text-bee-strong-1 font-medium"> Time: {team?.name} </h4>
                <span className="text-bee-blue-clean font-medium">Líder: {(users || []).filter(f => f.id === team?.leader)[0]?.name} </span>

                <div className="gap-4">
                    <ul className="text-black font-medium">
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