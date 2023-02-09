// import ContextUserProvider from "../context/ContextUser"
import { ContextUserProvider } from "../context/ContextCompany"
import ContextApp from "./ContextApp"


const CompanyApp = () => {
    return(
        <ContextUserProvider>
            <ContextApp />
        </ContextUserProvider>
    )

}

export default CompanyApp