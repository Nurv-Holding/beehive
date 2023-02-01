import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TitleCompany from '../components/TitleCompany';
import UserAddKr from '../components/UserAddKr';
import UserCloseGoal from '../components/UserCloseGoal';
import UserGoalKrs from '../components/userGoalKrs';
import { ContextCompany } from '../context/ContextCompany';


function UserGoal() {

    let [isOpenAddKr, setIsOpenAddKr] = useState(false)
    let [isOpenCloseGoal, setIsOpenCloseGoal] = useState(false)

    function openModalAddKr() {
        setIsOpenAddKr(true)
    }

    function openModalCloseGoal() {
        setIsOpenCloseGoal(true)
    }

    function closeModal() {
        setIsOpenAddKr(false)
        setIsOpenCloseGoal(false)
    }

    const {
        company
    } = useContext(ContextCompany)

    const navigate = useNavigate()

    const routerBack = () => {
        navigate(-1)
    }


    return (
        <>
            <Header />

            <main className='flex flex-col items-center pt-8'>
                <div className='flex flex-row w-full justify-center items-center'>
                    <button onClick={routerBack} className="p-3 shadow-md text-xl rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <TitleCompany className='text-bee' name={company?.name} />
                </div>


                <div className='w-11/12'>
                    <div className='container-two-percentage'>
                        <div className='container-percentage-okr flex flex-col'>
                            <span className='font-bold text-xl text-bee-strong-1 uppercase'>Nome do Objetivo</span>
                            <span className='font-bold text-lg mt-2 text-bee-blue-clean'> Objetivo pessoal de: Nome do usuário </span>
                        </div>

                        <div className='container-percentage-okr flex flex-row justify-end gap-4'>
                            <UserAddKr
                                isOpen={isOpenAddKr}
                                openModal={openModalAddKr}
                                closeModal={closeModal}
                            />

                            <UserCloseGoal
                                isOpen={isOpenCloseGoal}
                                openModal={openModalCloseGoal}
                                closeModal={closeModal}
                            />
                        </div>
                    </div>

                    <UserGoalKrs />

                    <div className='border-t mt-6 pt-4 border-white'>
                        <span className='font-bold text-xl mt-2 text-bee-strong-1'>Times pertencentes: </span>
                        <div className='flex gap-2'>
                            <span className='font-bold text-lg mt-2 text-bee-blue-clean bg-white p-2 rounded-md shadow-md'> Time X </span>
                            <span className='font-bold text-lg mt-2 text-bee-blue-clean bg-white p-2 rounded-md shadow-md'> Time Y </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UserGoal;