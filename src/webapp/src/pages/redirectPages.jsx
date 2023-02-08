import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContextCompany } from "../context/ContextCompany"
import Loading from "../components/Loading"

const RedirectPages = () => {
    const { payload, idCompany } = useContext(ContextCompany)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("payload", payload)
        if(payload){
            if(payload?.nameProfile === "adminMaster"){
                setLoading(false)
                navigate(`wayOfBeing`)
            }else{
                setLoading(false)
                navigate(`user/${payload?.id}`)
            }
        }

    },[idCompany, navigate, payload])

    return(
        <>
        {loading && <Loading />}
        {/* <div className="text-black"> {JSON.stringify(payload?.id)} </div> */}
        </>
    )
}

export default RedirectPages