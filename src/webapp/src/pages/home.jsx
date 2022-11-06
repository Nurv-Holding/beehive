import Header from '../components/header';
import Profile from '../components/profile';
import Companies from '../components/companiesList';
import Methodology from '../components/methodology';
import { useState } from 'react';
import { useEffect } from 'react';
import companiesApi from '../api/companiesApi';

function Home() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    handlerCompanies()
  },[])

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
            <Methodology />
          </div>

{/* SECOND COL */}
            <div className='grid-col'>
              <Companies companies={companies} />
            </div>

{/* THIRD COL */}
            {/* <div className='grid-col'>
              <Methodology />
            </div> */}
          </div>
      </main>
    </>
  );
}

export default Home;