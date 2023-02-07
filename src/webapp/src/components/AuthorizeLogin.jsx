import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ContextCompany } from "../context/ContextCompany"
import Loading from "./Loading"

const AuthorizeLogin = ({children}) => {
    const { payload } = useContext(ContextCompany)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(!(!!payload)){
            setLoading(false)
            navigate("/login")
        }

        if(!!payload && payload?.nameProfile === "adminMaster"){
            setLoading(false)
            navigate("/")
        }

    },[payload, navigate])

    return(
        <>
            {loading? <Loading />: children}
        </>
    )
}

export default AuthorizeLogin