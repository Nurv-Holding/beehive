import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import historyGoalKrApi from '../api/historyGoalKrApi';
import Header from '../components/header';
import HistoriesList from '../components/HistoriesList';
import { ContextUser } from '../context/ContextUser';


function History() {
    const {idgoalsKr, idGoal} = useParams()
    const {idCompany, users} = useContext(ContextUser)
    const [histories, setHistories] = useState([])

    useEffect(() => {
        handleHistory()

    },[idgoalsKr, users])

    const handleHistory = async () => {
        const {data} = await historyGoalKrApi.HistoryGoalKrByKr(idCompany, idGoal, idgoalsKr)
        setHistories(data)
    }

    return (
        <>
            <Header />
            <HistoriesList histories={histories} users={users} />
        </>
    );
}

export default History;