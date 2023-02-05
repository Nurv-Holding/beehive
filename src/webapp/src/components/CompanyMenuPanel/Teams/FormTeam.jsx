import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import teamsApi from '../../../api/teamsApi';
import usersApi from '../../../api/usersApi';
import Header from '../../Header';

function FormTeam() {
    const navigate = useNavigate()
    const [team, setTeam] = useState({name:"", descriptions:""})
    const [message, setMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [users, setUsers] = useState([])
    const {idCompany} = useParams()

    const modelChange = ({target}) => {
        setTeam((state) => {
            return {...state,[target.name]: target.value}
        })
    }

    useEffect(() => {
        const handleUsers = async () => {
            const {data} = await usersApi.getAllByCompany(idCompany)
            setUsers(data)
        }
        
        handleUsers()

    },[idCompany])

    const handleSubmit = (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        if(team.name === "" || team.descriptions === "")
            setMessage("Os campos precisam ser preeenchidos")

        else{
            teamsApi.create(idCompany,{...team, leader:parseInt(team.leader)})
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

            <main className='flex flex-col items-center'>
                <div className='flex flex-row w-full justify-center items-center mt-8'>
                    <button onClick={routerBack} className="px-2 rounded-lg bg-white hover:bg-[#5500C3] hover:text-white hover:cursor-pointer absolute m-2 left-2">voltar</button>
                </div>

                <div>
                    <span className='m-2 text-center justify-self-center text-[#5500C3] font-bold text-2xl hover:cursor-default'>
                        Cadastrar time
                    </span>
                </div>

                <div className='flex flex-col w-2/4 items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4'>
                        <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                            <input type="text" required className="input-style" placeholder='Nome' name='name' onChange={modelChange} />

                            <input type="text" required className="input-style" placeholder='Descrição' name='descriptions' onChange={modelChange} />

                            <select onChange={modelChange} name="leader" id="users" className="input-style">
                                <option disabled selected>Líder do time</option>
                                {(users || []).map((user) => {
                                    return(
                                        <option value={user.id}> {user.name} </option>
                                    )
                                })}
                            </select>
                        </div>

                        <button className='submit-button mt-4' type="submit">Cadastrar</button>
                    </form>
                    <span className="text-center"> {message} </span>
                </div>
            </main>
        </>
    )

}

export default FormTeam