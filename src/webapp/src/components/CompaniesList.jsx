import { Link } from 'react-router-dom';

function CompaniesList({ companies }) {

    return (
        <div className='bg-white rounded-md shadow-md flex flex-col p-8 min-h-[475px]'>
            <h1 className='text-sm text-bee-blue-clean mb-2 cursor-default font-medium'>Empresas</h1>

            <div>
                <ul className='flex flex-col gap-2'>
                    {(companies || []).map((company) => {
                        return (
                            <Link className='w-full text-left bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium' to={`/company/${company.id}`}>
                                {company.name}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default CompaniesList;
