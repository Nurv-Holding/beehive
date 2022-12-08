import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import goalKrsApi from '../api/goalKrsApi';
import goalsTeamApi from '../api/goalsTeamApi';
import historyGoalKrApi from '../api/historyGoalKrApi';
import historyGoalTeamKrApi from '../api/historyGoalTeamKrApi';
import Header from '../components/Header';
import HistoryKrsList from '../components/HistoryKrsList';
import HistoryKrsTeamList from '../components/HistoryKrsTeamList';
import TeamHistoriesList from '../components/TeamHistoriesList';
import { ContextUser } from '../context/ContextUser';

const HistoryKrsTeam = () => {

    const {idTeam, idGoal} = useParams()
    const { idCompany } = useContext(ContextUser)
    const [histories, setHistories] = useState([])
    const [goalTeams, setGoalTeams] = useState([])
    const [team, setTeam] = useState(
        {
            id:null, 
            name:"", 
            author:null,
            descriptions:"",
            toQuarterly: null,
            fromQuarterly: null,
            toYearly: null,
            fromYearly: null,
            done: null,
            status: false,
            createdAt: "",
            updatedAt: ""
        }
    )

    useEffect(() => {
        handleHistory()
        handlerTeam()

    },[idTeam])

    const handlerTeam = async () => {
        const {data} = await goalKrsApi.getById(idCompany, idTeam)
        setTeam(data)
    }

    // const handleGoalTeams = async () => {
    //     const {data} = await proces
    // }

    const handleHistory = async () => {
        const {data} = await historyGoalTeamKrApi.getByKrs(idCompany, idGoal, idTeam)
        setHistories(data)
    }
    

    return (
        <>
            <Header />
            
            <HistoryKrsTeamList histories={histories} team={team} />
        </>
    );
}

export default HistoryKrsTeam;