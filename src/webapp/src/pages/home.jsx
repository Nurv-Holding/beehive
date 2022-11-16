import Header from '../components/header';
import Profile from '../components/profile';
import Companies from '../components/companiesList';
import AddEmpresa from '../components/addEmpresa';
import { useState } from 'react';
import { useEffect } from 'react';
import companiesApi from '../api/companiesApi';

function Home() {
  const [companies, setCompanies] = useState([])
  const [queryUpdate, setQueryUpdate] = useState(false)

  useEffect(() => {
    handlerCompanies()

  },[queryUpdate])

  const handlerCompanies = async () => {
    const {data} = await companiesApi.getAll()
    setCompanies(data)
  }


  return (
    <>
      <Header />

      <main>
        <div className='grid-container'>

{/* FIRST COL */}
          <div className='grid-col'>
            <Profile />
            <AddEmpresa 
              setQueryUpdate={setQueryUpdate}
              queryUpdate={queryUpdate}
            />
          </div>

{/* SECOND COL */}
            <div className='grid-col'>
              <Companies companies={companies} />
            </div>
          </div>
      </main>
    </>
  );
}

export default Home;