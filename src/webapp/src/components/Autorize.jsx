import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { ContextCompany } from "../context/ContextCompany"


const Autorize = ({ children, userAutorized }) => {
    const {idCompany, payload} = useContext(ContextCompany)
    const [profile, setProfile] = useState({})

    useEffect(() => {
        console.log("payload", payload)
        
    }, [idCompany])

    const getOneProfile = async () => {

    }

    return(
        <>
            {children}
        </>
    )
}

export default Autorize