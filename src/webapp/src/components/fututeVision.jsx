import { Link } from "react-router-dom"

const FutureVision = ({ futureVisions, idCompany }) => {
    return (
        <>
            <div className="p-4">
                {(futureVisions || []).map((f) => {
                    return (
                        <div className="flex flex-col items-center">

                            <div className="flex items-center gap-2">
                                <h1 className="text-center font-bold text-2xl"> {f.title} </h1>

                                <Link
                                    to={`/company/${idCompany}/formfuturevisionchildren/${f.id}`} className="rounded-lg bg-bee hover:bg-bee-strong-1 text-white text-center self-end text-lg px-2"
                                >
                                    +
                                </Link>
                            </div>
                            <p className="w-full"> {f.description} </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FutureVision