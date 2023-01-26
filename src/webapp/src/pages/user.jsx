import Header from '../components/Header';
import jwtDecode from 'jwt-decode';


function User() {
    const token = localStorage.getItem("token")
    const payload = token ? jwtDecode(token) : null

    return (
        <>
            <Header />

            <main>

                <div className='grid-container'>
                    <div className='grid-col'>
                        {/* Erro no payload <Profile payload={payload} /> */}

                        <div className='grid-row w-full bg-white p-4 flex flex-col'>
                            <h1 className='container-title'>Entregas</h1>
                            <div className='flex flex-col gap-1'>
                                <div className='w-full rounded-md p-1 text-white bg-green-500'>
                                    <span>
                                        Em dia:
                                        <span className='text-xl font-bold'> 12</span>
                                    </span>
                                </div>
                                <div className='w-full rounded-md p-1 text-white bg-yellow-500'>
                                    <span>
                                        Para hoje:
                                        <span className='text-xl font-bold'> 1</span>
                                    </span>
                                </div>
                                <div className='w-full rounded-md p-1 text-white bg-red-500'>
                                    <span>
                                        Atrasadas:
                                        <span className='text-xl font-bold'> 3</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid-col'>
                        <div className='grid-row w-full bg-white p-4'>
                            <h1 className='container-title'>OKRs </h1>

                            <div>
                                <ul className='flex flex-row gap-2 w-full flex-wrap justify-center items-center'>
                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>
                                </ul>
                            </div>
                        </div>

                        <div className='grid-row w-full bg-white p-4'>
                            <h1 className='container-title'>OKRs Pessoais</h1>

                            <div>
                                <ul className='flex flex-row gap-2 w-full flex-wrap justify-center items-center'>
                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>

                                    <a className='text-center w-[20%] bg-bee-blue-clean hover:bg-bee-blue-strong p-2 rounded-md text-white text-sm font-medium'>
                                        OKR
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
}

export default User;