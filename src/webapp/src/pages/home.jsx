import Header from '../components/Header';
import Profile from '../components/profile';
import AddCompanies from '../components/AddCompanies';
import { useState } from 'react';
import { useEffect } from 'react';
import companiesApi from '../api/companiesApi';
import CompaniesList from '../components/CompaniesList';
import Authorize from '../components/Authorize';
import jwtDecode from 'jwt-decode';
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [companies, setCompanies] = useState([])
  const token = localStorage.getItem("token")
  const payload = token? jwtDecode(token): null
  const [searchParams] = useSearchParams()
  const update = searchParams.get('update')

  useEffect(() => {
    const handlerCompanies = async () => {
      const {data} = await companiesApi.getAll()
      setCompanies(payload?.idCompany? (data || [])?.filter(e => e.id === payload?.idCompany): data)
    }

    handlerCompanies()

  },[update, payload])

  return (
    <>
      <Authorize>
      <Header />
      <main>
        <div className='grid-container'>
          <div className='grid-col'>
            <Profile payload={payload} />
            {payload?.nameProfile === "adminMaster" &&
            <AddCompanies />
            }

          </div>

            <div className='grid-col'>
              <CompaniesList companies={companies} />
            </div>
          </div>
      </main>
      </Authorize>
    </>
  );
}

export default Home;