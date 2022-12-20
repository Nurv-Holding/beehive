

const Principles = ({ principles }) => {
    return(
        <>
        <div className="p-4">
            {(principles || []).map((p) => {
                return(
                    <div>
                        <h1 className="text-center font-bold text-2xl"> {p.title} </h1>
                        <p> {p.description} </p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Principles