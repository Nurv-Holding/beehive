import Header from '../components/header';
import Profile from '../components/profile';
import AddCompanies from '../components/AddCompanies';
import { useState } from 'react';
import { useEffect } from 'react';
import companiesApi from '../api/companiesApi';
import CompaniesList from '../components/CompaniesList';

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
          <div className='grid-col'>
            <Profile />
            
            <AddCompanies
              setQueryUpdate={setQueryUpdate}
              queryUpdate={queryUpdate}
            />
          </div>

            <div className='grid-col'>
              <CompaniesList companies={companies} />
            </div>
          </div>
      </main>
    </>
  );
}

export default Home;