import Header from '../components/Header';
import Profile from '../components/profile';
import AddCompanies from '../components/AddCompanies';
import { useState } from 'react';
import { useEffect } from 'react';
import companiesApi from '../api/companiesApi';
import CompaniesList from '../components/CompaniesList';
import AuthorizeLogin from '../components/AuthorizeLogin';
import jwtDecode from 'jwt-decode';
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [companies, setCompanies] = useState([])
  const [searchParams] = useSearchParams()
  const [newPayload, setPayload] = useState(null)
  const update = searchParams.get('update')

  useEffect(() => {
    const token = localStorage.getItem("token")
    const payload = token ? jwtDecode(token) : null

    setPayload(() => payload)
    const handlerCompanies = async () => {
      const { data } = await companiesApi.getAll()

      if (payload?.nameProfile === "adminMaster")
        setCompanies(data)
      else
        setCompanies(payload?.idCompany ? (data || [])?.filter(e => e.id === payload?.idCompany) : data)
    }

    handlerCompanies()

  }, [update])

  return (
    <>
      <AuthorizeLogin>
        <Header />
        <main>
          <div className='w-full grid justify-center my-8 gap-8 grid-cols-[20%,70%]'>
            <div className='flex flex-col gap-8'>
              <Profile payload={newPayload} />

              {newPayload?.nameProfile === "adminMaster" &&
                <AddCompanies />
              }

            </div>

            <div className='flex flex-col'>
              <CompaniesList companies={companies} />
            </div>
          </div>
        </main>
      </AuthorizeLogin>
    </>
  );
}

export default Home;