import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import companiesApi from '../api/companiesApi';
import Header from '../components/Header';
import { ContextUserProvider } from '../context/ContextCompany';
import CompanyMenu from './sub-pages/CompanyMenu';

function Company() {
  const {idCompany} = useParams()
  const [company, setCompany] = useState({name:"", cnpj:"", createdAt:"", updatedAt:""})

  useEffect(() => {
    const handleCompany = async () => {
      const {data}= await companiesApi.getById(idCompany)
      setCompany(data)
    }
    handleCompany()

  },[idCompany])

  return (
    <>
      <Header />
      <ContextUserProvider>
        <CompanyMenu company={company} />
      </ContextUserProvider>
    </>
  );
}

export default Company;