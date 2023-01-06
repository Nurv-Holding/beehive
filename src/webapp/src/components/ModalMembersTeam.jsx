import { useContext, useEffect, useState } from "react"
import teamsUsersApi from "../api/teamsUsersApi"
import { ContextUser } from "../context/ContextUser"
import NewModal from "./CompanyMenuPanel/Goals/components/NewModal"

const ModalMembersTeam = ({idRef, idTeam}) => {
    const { idCompany, teams } = useContext(ContextUser)
    const [allTeamsAndUsers, setAllTeamsAndUsers] = useState([])

    useEffect(() => {
        handleAllTeamsAndUsers()

    },[idTeam])

    const handleAllTeamsAndUsers= async () => {
        const { data } = await teamsUsersApi.getAllTeamsAndUsers(idCompany)
        setAllTeamsAndUsers(() => {
            return data?.filter(f => f.idTeam === idTeam)
        })
    }

    return(
        <NewModal idRef={idRef}>
            <div className="m-4">
                <h4 className="text-center text-black"> Time: {(teams || []).filter(e => e.id === idTeam)[0]?.name} </h4>

                <div className="gap-4">
                    <ul className="text-black">
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