import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import profilesApi from "../api/profilesApi"
import { ContextCompany } from "../context/ContextCompany"


const Autorize = ({ children, userAutorized }) => {
    const {idCompany, payload} = useContext(ContextCompany)
    const [profile, setProfile] = useState({})

    useEffect(() => {
        console.log("payload", payload)
        console.log("userAutorized", userAutorized)
        console.log("profile", profile)
        getOneProfile()
        
    }, [idCompany])

    const getOneProfile = async () => {
        const {data} = await profilesApi.getById(payload?.idProfile)
        setProfile(data)
    }

    return(
        <>
            { userAutorized.some((x) => x === profile?.name)? children: "Não autorizado"}
        </>
    )
}

export default Autorize