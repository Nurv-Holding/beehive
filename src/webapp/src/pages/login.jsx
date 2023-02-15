import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import usersApi from "../api/usersApi"

const Login = () => {
    const [user, setUse] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const modelChange = ({ target }) => {
        setUse((state) => {
            return { ...state, [target.name]: target.value }
        })
    }

    const login = async (event) => {
        event.preventDefault()

        searchParams.delete('update')
        setSearchParams(searchParams)

        if (user.email === "" || user.password === "")
            setMessage("Precisa preencher os campos")

        else
            setLoading(true)
            usersApi.authenticate(user)
                .then(() => {
                    setMessage("Time adicionado sucesso")
                    navigate({
                        pathname: `/login`,
                        search: `?update=${true}`
                    })

                    setLoading(false)
                    navigate("/")
                    

                })
                .catch((error) => {
                    if (error?.response?.data === "Invalid username or passwords")
                        setMessage("Usuário ou senha não conferem!")

                    else
                        setMessage("Algo deu errado!")

                })
    }

    return (
        <main className="main-login">
            < div className="login-container">
                <form onSubmit={login} className="login-form-container">
                    <h1 className="text-xl font-medium">Faça seu login</h1>
                    <div className="w-[65%] flex flex-col">
                        <label htmlFor="">Email</label>
                        <input onChange={modelChange} className="input-style" type="email" name="email" placeholder="Digite o email" />
                    </div>

                    <div className="w-[65%] flex flex-col">
                        <label htmlFor="">Senha</label>
                        <input onChange={modelChange} className="input-style" type="password" name="password" placeholder="Digite sua senha" />
                    </div>
                    {loading ?
                        <span> Aguarde... </span>
                        :
                        <button className="form-submit-button" type="submit">Entrar no portal</button>
                    }

                    <span className={`text-center`}> {message} </span>
                </form>
            </div >
        </main>
    )
}

export default Login