import 'tw-elements'

const NewModal = ({children, idRef}) => {
    return(
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full bg-[rgba(0,0,0,0.8)]" id={`${idRef}`} aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered relative w-auto top-[50%] translate-y-[-50%] pointer-events-none">
            <div className="modal-content border-none shadow-lg relative w-2/6 mx-auto pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                {children}
            </div>
        </div>
    </div>
    )
}

export default NewModal