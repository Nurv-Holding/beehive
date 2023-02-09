import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"

const AuthorizeLogin = ({children}) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(!(!!token)){
            setLoading(false)
            navigate("/login")
        }

    },[navigate])

    return(
        <>
            {loading? <Loading />: children}
        </>
    )
}

export default AuthorizeLogin