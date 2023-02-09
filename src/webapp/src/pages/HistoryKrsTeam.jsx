import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import historyGoalTeamKrApi from '../api/historyGoalTeamKrApi';
import teamsApi from '../api/teamsApi';
import HistoryKrsTeamList from '../components/HistoryKrsTeamList';
import { ContextCompany } from '../context/ContextCompany';

const HistoryKrsTeam = () => {

    const { idTeam, idGoal } = useParams()
    const { idCompany } = useContext(ContextCompany)
    const [histories, setHistories] = useState([])
    const [goalTeams, setGoalTeams] = useState([])
    const navigate = useNavigate()
    const [goaloalTeamByKrs, setGoalTeamByKrs] = useState([])
    const [team, setTeam] = useState(
        {
            id: null,
            name: "",
            idCompany: null,
            descriptions: "",
            createdAt: "",
            updatedAt: ""
        }
    )

    useEffect(() => {
        const handlerTeam = async () => {
            const { data } = await teamsApi.getById(idTeam, idCompany)
            setTeam(data)
        }

        const handleGoalTeamByGoalTeam = async () => {
            const { data } = await goalTeamsKrsApi.getGroupByGoalTeam(idCompany, idGoal)
            setGoalTeams(data)
        }

        const handleHistory = async () => {
            const { data } = await historyGoalTeamKrApi.getByKrs(idCompany, idGoal, idTeam)
            setHistories(data)
        }

        const handleGoalTeamByKrs = async () => {
            const { data } = await goalTeamsKrsApi.getGroupByKrs(idCompany, idGoal)
            setGoalTeamByKrs(data)
        }

        handleHistory()
        handlerTeam()
        handleGoalTeamByGoalTeam()
        handleGoalTeamByKrs()

    }, [idTeam, idCompany, idGoal])

    const routerBack = () => {
        navigate(-1)
    }

    return (
        <>
            <HistoryKrsTeamList histories={histories} team={team} goalTeams={goalTeams} goaloalTeamByKrs={goaloalTeamByKrs} routerBack={routerBack} />
        </>
    );
}

export default HistoryKrsTeam;