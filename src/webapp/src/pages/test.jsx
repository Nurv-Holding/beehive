import StockChart from "../components/chart"
import Header from "../components/header"


const Test = () => {
    const info = {}
    return(
        <div>
            <Header />
            <StockChart info={info} />
        </div>
       
    )
}

export default Test