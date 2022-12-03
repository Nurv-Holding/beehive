import { useState } from "react"
import { useNavigate } from "react-router-dom"
import usersApi from "../api/usersApi"
import Header from "../components/header"
const Login = () => {
    const [user, setUse] = useState({email: "", password: ""})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("Aqui vai uma mensagem")
    const [queryUpdate, setQueryUpdate] = useState(false)
    const navigate = useNavigate()

    const modelChange = ({ target }) => {
        setUse((state) => {
            return {...state, [target.name]: target.value}
        })
    }

    const login = async (event) => {
        event.preventDefault()

        if(user.email === "" || user.password === "")
            setMessage("Precisa preencher os campos")

        else
            usersApi.authenticate(user)
            .then(() => {
                setMessage("Time adicionado sucesso")
                setQueryUpdate((x) => !x)
                navigate({
                  pathname: `/login`,
                  search: `?update=${queryUpdate}`
                })

                navigate("/")
                setLoading(true)

              })
              .catch((error) => {
                if(error?.response?.data === "Invalid username or passwords")
                    setMessage("Usuário ou senha não conferem!")

                else
                    setMessage("Algo deu errado!")
    
              })
    }

    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full ">
                <div className="login-container">
                    <h1 className="login-title">Entre em sua conta</h1>
                    <form onSubmit={login} className="login-form-container">
                        <div className="w-[65%]">
                        <label htmlFor="">Email</label>
                        <input onChange={modelChange} className="input-style" type="email" name="email" placeholder="Digite o email"/>
                        </div>
              
                        <div className="w-[65%]">
                        <label htmlFor="">Senha</label>
                        <input onChange={modelChange} className="input-style" type="password" name="password" placeholder="Digite sua senha" />    
                        </div>
                        {loading?
                            <span> Aguarde... </span>
                        :
                        <button className="form-submit-button" type= "submit">Entrar no portal</button>
                        }
                        
                        <span> {message} </span>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login