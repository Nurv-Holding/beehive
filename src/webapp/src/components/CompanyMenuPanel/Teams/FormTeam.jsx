import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import teamsApi from '../../../api/teamsApi';
import { ContextCompany } from '../../../context/ContextCompany';
import AuthorizeAccess from '../../AuthorizeAccess';
import Header from '../../Header';

function FormTeam() {
    const {users,idCompany} = useContext(ContextCompany)
    const navigate = useNavigate()
    const [team, setTeam] = useState({ name: "", descriptions: "" })
    const [message, setMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()

    const modelChange = ({ target }) => {
        setTeam((state) => {
            return { ...state, [target.name]: target.value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if (team.name === "" || team.descriptions === "")
            setMessage("Os campos precisam ser preeenchidos")

        else {
            teamsApi.create(idCompany, { ...team, leader: parseInt(team.leader) })
                .then(() => {
                    setMessage("Cadastro realizado com sucesso")
                    navigate({
                        pathname: `/formteam/${idCompany}`,
                        search: `?update=${true}`
                    })
                })
                .catch((error) => {
                    console.error(error)
                    setMessage("Algo deu errado!")
                })
        }
    }

    const routerBack = () => {
        navigate(`/company/${idCompany}`)
    }

    return (
        <>
            <Header />
            <AuthorizeAccess userAutorized={["adminMaster","adminCorporate"]}>
                <main className='flex flex-col items-center gap-8'>
                    <div className='flex items-center mt-8'>
                        <button onClick={routerBack} className="p-3 text-xl shadow-md rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </button>

                        <span className='font-bold text-2xl text-bee-blue-clean uppercase mt-2'> Cadastrar Time</span>
                    </div>

                    <div className='flex flex-col w-2/4 items-center bg-white p-2 rounded-lg shadow-xl'>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4'>
                            <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                                <input type="text" required className="input-style" placeholder='Nome' name='name' onChange={modelChange} />

                                <input type="text" required className="input-style" placeholder='Descrição' name='descriptions' onChange={modelChange} />

                                <select onChange={modelChange} name="leader" id="users" className="input-style">
                                    <option disabled selected>Líder do time</option>
                                    {(users || []).map((user) => {
                                        return (
                                            <option value={user.id}> {user.name} </option>
                                        )
                                    })}
                                </select>
                            </div>

                            <button className='submit-button mt-4' type="submit">Cadastrar</button>
                        </form>
                        <span className={'block text-center'}> {message} </span>
                    </div>
                </main>
            </AuthorizeAccess>
        </>
    )

}

export default FormTeam