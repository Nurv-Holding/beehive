import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import usersApi from "../../../api/usersApi"


const EditProfile = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [message, setMessage] = useState("")
    const [newPayload, setNewPayload] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [editPassword, setEditPassword] = useState(false)
    const objectProfile = {
        name:"",
        email:"",
        occupation:"",
        password:"",
        passwordRepeat:""
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        const payload = token? jwtDecode(token): null
        setNewPayload(() => payload)

        const handlerProfile = async () => {
            const {data} = await usersApi.getById(payload?.id, payload?.idCompany)
            setProfile(data)
        }

        handlerProfile()

    },[])

    const [profile, setProfile] = useState(objectProfile)

    const changeModel = ({target}) => {
        setProfile((state) => {
            return {...state, [target.name]: target.value}
        })
    }

    const register = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        if(profile.name === "" || profile.email === "" || profile.password === "" ){
            setMessage("Os campos devem ser preenchidos")

        }else if(profile.password.length !== 8){
            setMessage("A senha deve conter 8 caracteres")

        }else if(editPassword && (profile.password !== profile.passwordRepeat)){
            setMessage("Senhas não conferem")

        }else{

            await usersApi.update(newPayload?.id, {...profile, passwordRepeat:undefined})

            usersApi.authenticate({...profile, passwordRepeat:undefined})
            .then(() => {
                setProfile(objectProfile)
                setMessage("Cadastro realizado com sucesso")
                navigate({
                    pathname: `/editProfile`,
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
        navigate(-1)
    }

    return(
        <main className='flex flex-col items-center gap-8 relative'>
        <div className='flex items-center mt-8'>
            <button onClick={routerBack} className="p-3 text-xl shadow-md rounded-full flex justify-center items-center bg-bee-blue-clean hover:bg-bee-blue-strong hover:text-white hover:cursor-pointer absolute m-2 left-12">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </button>

            <span className='font-bold text-2xl text-bee-blue-clean uppercase mt-2'> Cadastrar Usuário </span>
        </div>

        <div className='flex flex-col w-2/4 items-center mt-4 bg-white p-2 rounded-lg shadow-xl'>
            <div className='w-[20%] aspect-square rounded-full overflow-hidden'>
                <img alt='User profile' src="https://thispersondoesnotexist.com/image" />
            </div>
            <form onSubmit={register} className='w-full flex flex-col items-center p-4'>
                <div className='w-[70%] gap-2 flex flex-wrap items-center justify-center'>
                    <input onChange={changeModel} type="text" value={profile.name} className="input-style" name='name' placeholder='Nome' />

                    <input onChange={changeModel} type="text" value={profile.occupation} className="input-style" name='occupation' placeholder='Cargo' />

                    <input onChange={changeModel} type="text" value={profile.email} className="input-style" name='email' placeholder='Email' />

                    <input onClick={() => setEditPassword(!editPassword)} type="checkbox" className="input-style"/>Editar senha

                    {editPassword &&
                    <>
                    <input onChange={changeModel} type={`${!showPassword? "password": "text"}`} value={profile.password} className="input-style" name='password' placeholder='Senha' />

                    <input onChange={changeModel} type={`${!showPassword? "password": "text"}`} className="input-style" name='passwordRepeat' placeholder='Repita a senha' />

                    <input onClick={() => setShowPassword(!showPassword)} type="checkbox" className="input-style"/>Mostrar senha
                    </>
                    }

 
                </div>

                <button className='submit-button mt-4' type="submit">Cadastrar</button>
            </form>
            <span className={`block text-center`}> {message} </span>
        </div>
    </main>
    )
}

export default EditProfile