

const ButtonSpinner = ({title}) => {
    return(
        <button type="button" className="bg-bee-blue-clean text-white" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                
            </svg>
            {title}
        </button>
    )
}

export default ButtonSpinner