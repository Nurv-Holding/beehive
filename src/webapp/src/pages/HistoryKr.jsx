import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import goalKrsApi from '../api/goalKrsApi';
import historyGoalKrApi from '../api/historyGoalKrApi';
import Header from '../components/Header';
import HistoryKrsList from '../components/HistoryKrsList';
import TeamHistoriesList from '../components/TeamHistoriesList';
import { ContextUser } from '../context/ContextUser';

const HistoryKr = () => {

    const { idgoalsKr, idGoal } = useParams()
    const { idCompany } = useContext(ContextUser)
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
        handleHistory()
        handlerGoalKr()

    }, [idgoalsKr])

    const handlerGoalKr = async () => {
        const { data } = await goalKrsApi.getById(idCompany, idgoalsKr)
        setGoalKr(data)
    }

    const handleHistory = async () => {
        const { data } = await historyGoalKrApi.HistoryGoalKrByKr(idCompany, idGoal, idgoalsKr)
        setHistories(data)
    }

    const routerBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header />

            <div className='flex flex-row w-full justify-center items-center mt-6'>
                <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-[#5500C3] hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
            </div>

            <HistoryKrsList histories={histories} goalKr={goalKr} />
            {/* <TeamHistoriesList/> */}
        </>
    );
}

export default HistoryKr;