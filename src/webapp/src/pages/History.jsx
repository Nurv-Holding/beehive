import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import goalKrsApi from '../api/goalKrsApi';
import historyGoalKrApi from '../api/historyGoalKrApi';
import Header from '../components/Header';
import ObjectiveKrHistoriesList from '../components/ObjectiveKrHistoriesList';
import TeamHistoriesList from '../components/TeamHistoriesList';
import { ContextUser } from '../context/ContextUser';

const History = () => {
    /*
    const {idgoalsKr, idGoal} = useParams()
    const { idCompany } = useContext(ContextUser)
    const [histories, setHistories] = useState([])
    const [goalKr, setGoalKr] = useState(
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
        handlerGoalKr()

    },[idgoalsKr])

    const handlerGoalKr = async () => {
        const {data} = await goalKrsApi.getById(idCompany, idgoalsKr)
        setGoalKr(data)
    }

    const handleHistory = async () => {
        const {data} = await historyGoalKrApi.HistoryGoalKrByKr(idCompany, idGoal, idgoalsKr)
        setHistories(data)
    }
    */

    return (
        <>
            <Header />
            {/* <ObjectiveKrHistoriesList histories={histories} goalKr={goalKr} /> */}
            <TeamHistoriesList/>
        </>
    );
}

export default History;