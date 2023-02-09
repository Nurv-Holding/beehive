import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import futureVisionApi from '../../../api/futureVisionApi';
import AuthorizeAccess from '../../AuthorizeAccess';

function FormWayOfBeing() {
    const navigate = useNavigate()
    const { idCompany } = useParams()
    const [item, setItem] = useState({ title: "", description: "" })
    const [message, setMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()

    const routerBack = () => {
        navigate(`/company/${idCompany}/wayOfBeing`)
    }

    const modelChange = ({ target }) => {
        setItem((state) => {
            return { ...state, [target.name]: target.value }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        searchParams.delete('update')
        setSearchParams(searchParams)

        const {data} = await futureVisionApi.getAll(idCompany)

        const hasFutureVision = data.length

        if(item.title === "" || item.description === "")
            setMessage("Os campos precisam ser preeenchidos")

        else if(hasFutureVision !== 0)
            setMessage("Visão de futuro já cadastrado")

        else {
            futureVisionApi.create(idCompany, item)
                .then(() => {
                    setMessage("Cadastro realizado com sucesso")
                    navigate({
                        pathname: `/company/${idCompany}/registerfuturevision`,
                        search: `?update=${true}`
                    })
                })
                .catch((error) => {
                    console.error(error)
                    setMessage("Algo deu errado!")
                })
        }
    }

    return (
        <>
        <AuthorizeAccess userAutorized={["adminMaster" ,"adminCorporate"]}>
            <main className='flex flex-col items-center gap-8 pt-8 relative text-black'>
                <button onClick={routerBack} className="p-3 text-xl shadow-md rounded-full flex justify-center items-center bg-bee-blue-clean hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </button>

                <span className=' text-center justify-self-center text-bee-blue-clean font-bold text-2xl hover:cursor-default'>
                    Cadastrar Visão de futuro
                </span>

                <div className='flex flex-col w-2/4 min-h-[300px]  justify-center items-center bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center p-4 gap-4'>
                        <div className='w-[70%] flex flex-col items-center justify-center gap-4'>
                            <input type="text" className="input-style text-center" placeholder='Título' name='title' onChange={modelChange} />

                            <textarea className="p-2 input-style min-h-[50px] w-full text-center" placeholder='Descrição' name="description" onChange={modelChange} cols="60" rows="3"></textarea>
                        </div>

                        <button className='submit-button mt-4' type="submit">Cadastrar</button>
                    </form>
                    <span className={`block text-center`}> {message} </span>
                </div>

            </main>
        </AuthorizeAccess>
        </>
    )

}

export default FormWayOfBeing