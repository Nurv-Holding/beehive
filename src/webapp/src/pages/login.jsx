import Header from "../components/header"
const Login = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center w-full ">
                <div className="login-container">
                    <h1 className="login-title">Entre em sua conta</h1>
                    <form className="login-form-container">
                        <div className="w-[65%]">
                        <label htmlFor="">Usuário</label>
                        <input className="input-style" type="text" placeholder="Escreva seu usuário"/>
                        </div>
              
                        <div className="w-[65%]">
                        <label htmlFor="">Senha</label>
                        <input className="input-style" type="password" placeholder="Escreva sua senha" />    
                        </div>
                        
                        <button className="form-submit-button" type= "submit">Entrar no portal</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login