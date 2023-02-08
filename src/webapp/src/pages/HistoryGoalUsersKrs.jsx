import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import goalUserApi from '../api/goalUserApi';
import historyGoalsUserKrsApi from '../api/historyGoalsUserKrsApi';
import HistoryGoalUsersKrsList from '../components/HistoryGoalUsersKrsList';
import { ContextCompany } from '../context/ContextCompany';

const HistoryGoalUsersKr = () => {

    const { idGoalsUserKr, idUser } = useParams()
    const { idCompany, users } = useContext(ContextCompany)
    const [user, setUser] = useState(null)
    const [histories, setHistories] = useState([])
    const navigate = useNavigate()
    const [goalKr, setGoalKr] = useState(
        {
            id: null,
            name: "",
            descriptions: "",
            idUser:null,
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
            const { data } = await goalUserApi.getByIdKr(idCompany, idGoalsUserKr)
            setGoalKr(data)
        }
    
        const handleHistory = async () => {
            const { data } = await historyGoalsUserKrsApi.getHistoryKrsUsersByGoal(idCompany, idGoalsUserKr)
            setHistories(data)
        }

        handleHistory()
        handlerGoalKr()
        setUser(() => users.find(e => e.id === parseInt(idUser)))

    }, [idGoalsUserKr, idUser, idCompany, users])

    const routerBack = () => {
        navigate(-1)
    }

    return (
        <>
            <HistoryGoalUsersKrsList 
                histories={histories} 
                goalKr={goalKr} 
                user={user} 
                routerBack={routerBack}
            />
        </>
    );
}

export default HistoryGoalUsersKr;