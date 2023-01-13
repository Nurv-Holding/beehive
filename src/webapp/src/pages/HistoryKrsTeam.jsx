import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import goalTeamsKrsApi from '../api/goalTeamsKrsApi';
import historyGoalTeamKrApi from '../api/historyGoalTeamKrApi';
import teamsApi from '../api/teamsApi';
import Header from '../components/Header';
import HistoryKrsTeamList from '../components/HistoryKrsTeamList';
import { ContextUser } from '../context/ContextUser';

const HistoryKrsTeam = () => {

    const {idTeam, idGoal} = useParams()
    const { idCompany } = useContext(ContextUser)
    const [histories, setHistories] = useState([])
    const [goalTeams, setGoalTeams] = useState([])
    const navigate = useNavigate()
    const [goaloalTeamByKrs, setGoalTeamByKrs] = useState([])
    const [team, setTeam] = useState(
        {
            id:null, 
            name:"", 
            idCompany:null, 
            descriptions:"",
            createdAt:"",
            updatedAt:""
        }
    )

    useEffect(() => {
        handleHistory()
        handlerTeam()
        handleGoalTeamByGoalTeam()
        handleGoalTeamByKrs()

    },[idTeam])

    const handlerTeam = async () => {
        const {data} = await teamsApi.getById(idTeam, idCompany)
        setTeam(data)
    }

    const handleGoalTeamByGoalTeam = async () => {
        const { data } = await goalTeamsKrsApi.getGroupByGoalTeam(idCompany, idGoal)
        setGoalTeams(data)
      }

    const handleHistory = async () => {
        const {data} = await historyGoalTeamKrApi.getByKrs(idCompany, idGoal, idTeam)
        setHistories(data)
    }

    const handleGoalTeamByKrs = async () => {
        const { data } = await goalTeamsKrsApi.getGroupByKrs(idCompany, idGoal)
        setGoalTeamByKrs(data)
      }

      const routerBack = () => {
        navigate(-1)
    }
    
    return (
        <>
            <Header />

            <div className='flex flex-row w-full justify-center items-center mt-6'>
                <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-bee-blue-clean hover:text-white hover:cursor-pointer absolute m-2 left-12">voltar</button>
            </div>
            
            <HistoryKrsTeamList histories={histories} team={team} goalTeams={goalTeams} goaloalTeamByKrs={goaloalTeamByKrs} />
        </>
    );
}

export default HistoryKrsTeam;