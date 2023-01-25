import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import profilesApi from "../api/profilesApi"
import { ContextCompany } from "../context/ContextCompany"
import Loading from "./Loading"


const AuthorizeAccess = ({ children, userAutorized }) => {
    const {idCompany, payload} = useContext(ContextCompany)
    const [profile, setProfile] = useState(null)
    const {pathname} = useLocation()

    useEffect(() => {
        getOneProfile()
        console.log("profile", profile)
        
    }, [idCompany])

    const getOneProfile = async () => {
        const {data} = await profilesApi.getById(payload?.idProfile)
        setProfile(data)
    }

    return(
        <>
            {   
            
                !profile? <Loading />:
                userAutorized.some((x) => x?.toLowerCase() === profile?.name?.toLowerCase())? 
                children: "Não autorizado"
            }

        </>
    )
}

export default AuthorizeAccess