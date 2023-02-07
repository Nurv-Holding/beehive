import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import goalKrsApi from '../api/goalKrsApi';
import historyGoalKrApi from '../api/historyGoalKrApi';
import Header from '../components/Header';
import HistoryGoalKrsList from '../components/HistoryGoalKrsList';
import { ContextCompany } from '../context/ContextCompany';

const HistoryKr = () => {

    const { idgoalsKr, idGoal } = useParams()
    const { idCompany } = useContext(ContextCompany)
    const [histories, setHistories] = useState([])
    const navigate = useNavigate()
    const [goalKr, setGoalKr] = useState(
        {
            id: null,
            name: "",
            author: null,
            descriptions: "",
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
        const handlerGoalKr = async () => {
            const { data } = await goalKrsApi.getById(idCompany, idgoalsKr)
            setGoalKr(data)
        }
    
        const handleHistory = async () => {
            const { data } = await historyGoalKrApi.HistoryGoalKrByKr(idCompany, idGoal, idgoalsKr)
            setHistories(data)
        }
    

        handleHistory()
        handlerGoalKr()

    }, [idgoalsKr, idGoal, idCompany])


    const routerBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />

            <HistoryGoalKrsList histories={histories} goalKr={goalKr} routerBack={routerBack}/>
            {/* <TeamHistoriesList/> */}
        </>
    );
}

export default HistoryKr;