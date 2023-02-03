import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"
import jwtDecode from "jwt-decode"


const Authorize = ({children}) => {
    const token = localStorage.getItem("token")
    const payload = token? jwtDecode(token): null
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        if(!(!!token)){
            setLoading(false)
            navigate("/login")
        }

        if(!!token && payload?.nameProfile === "adminMaster"){
            setLoading(false)
            navigate("/")
        }

    },[token])

    return(
        <>
            {loading? <Loading />: children}
        </>
    )
}

export default Authorize