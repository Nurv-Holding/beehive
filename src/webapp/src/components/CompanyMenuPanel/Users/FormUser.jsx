import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import usersApi from '../../../api/usersApi';
import Header from '../../Header';

function FormUser() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const {idCompany} = useParams()
    const [message, setMessage] = useState("")
    const [employee, setEmployee] = useState({
        name:"",
        email:"",
        password:"",
        occupation:"",
        password:"",
        passwordRepeat:""
    })

    const changeModel = ({target}) => {
        setEmployee((state) => {
            return {...state, [target.name]: target.value}
        })
    }

    const register = (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        if(employee.name === "" || employee.email === "" || employee.password === "" ){
            setMessage("Os campos devem ser preenchidos")

        }else if(employee.password.length !== 8){
            setMessage("A senha deve conter 8 caracteres")

        }else if(employee.password !== employee.passwordRepeat){
            setMessage("Senhas não conferem")

        }else{

            if(idCompany){
                usersApi.createEmployee(idCompany, {...employee, passwordRepeat:undefined})
                .then(() => {
                    setEmployee({
                        name:"",
                        email:"",
                        password:"",
                        occupation:"",
                        password:"",
                        passwordRepeat:""
                    })
                    setMessage("Cadastro realizado com sucesso")
                    navigate({
                        pathname: `/company/${idCompany}/formuser`,
                        search: `?update=${true}`
                    })
                })
                .catch((error) => {
                    console.error(error)
                    setMessage("Algo deu errado!")
                })
            }

        }

    }

    const routerBack = () => {
        navigate(`/company/${idCompany}`)
    }

    return (
        <>
            <Header />

            <main className='flex flex-col items-center gap-8'>
                <div className='flex items-center mt-8'>
                    <button onClick={routerBack} className="p-3 text-xl shadow-md rounded-full flex justify-center items-center bg-white hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </button>

                    <span className='font-bold text-2xl text-bee-blue-clean uppercase mt-2'> Cadastrar Usuário </span>
                </div>

                <div className='flex flex-col w-2/4 items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
                    <form onSubmit={register} className='w-full flex flex-col items-center p-4'>
                        <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                            <input onChange={changeModel} type="text" value={employee.name} className="input-style" name='name' placeholder='Nome' />

                            <input onChange={changeModel} type="text" value={employee.occupation} className="input-style" name='occupation' placeholder='Cargo' />

                            <input onChange={changeModel} type="text" value={employee.email} className="input-style" name='email' placeholder='Email' />

                            <input onChange={changeModel} type="password" value={employee.password} className="input-style" name='password' placeholder='Senha' />

                            <input onChange={changeModel} type="password" value={employee.passwordRepeat} className="input-style" name='passwordRepeat' placeholder='Repita a senha' />
                        </div>

                        <button className='submit-button mt-4' type="submit">Cadastrar</button>
                    </form>
                    <span className={`block text-center`}> {message} </span>
                </div>
            </main>
        </>
    )

}

export default FormUser