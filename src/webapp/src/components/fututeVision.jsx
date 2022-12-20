

const FutureVision = ({ futureVisions }) => {
    return(
        <>
        <div className="p-4">
            {(futureVisions || []).map((f) => {
                return(
                    <div>
                        <h1 className="text-center font-bold text-2xl"> {f.title} </h1>
                        <p> {f.description} </p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default FutureVision