// import ContextUserProvider from "../context/ContextUser"
import { ContextUserProvider } from "../context/ContextUser"
import ContextApp from "./ContextApp"


const Users = () => {
    return(
        <ContextUserProvider>
            <ContextApp />
        </ContextUserProvider>
    )

}

export default Users