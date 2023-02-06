import { useContext, useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import TitleCompany from '../../components/TitleCompany'
import { Outlet, useNavigate } from 'react-router-dom'
import { ContextCompany } from '../../context/ContextCompany'
import profilesApi from '../../api/profilesApi'

export default function CompanyMenu( { company } ) {
  const { payload } = useContext(ContextCompany)
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getOneProfile = async () => {
      const { data } = await profilesApi.getById(payload?.idProfile)
      setProfile(data)
    }

    getOneProfile()

  },[payload])

  const redirectRouter = (path) => {
    navigate(path)
  }

  return (
    <div className='flex h-full'>
      <Tab.Group>
        <Tab.List className='container-nav-empresas'>

        <TitleCompany className="text-bee-blue-clean" name={company?.name} />

        {profile?.name !== "adminMaster" && 
          <Tab>
            {({ selected }) => (
              <button onClick={() => redirectRouter(`user/${payload?.id}`)}
                className={
                  selected && 'text-bee-blue-clean bg-gray-200'
                }
              >
                Meu painel
              </button>
            )}
          </Tab>
        }
          <Tab>
            {({ selected }) => (
              <button onClick={() => redirectRouter(`wayOfBeing`)}
                className={
                  selected && 'text-bee-blue-clean bg-gray-200'
                }
              >
                Jeito de ser
              </button>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
              <button onClick={() => redirectRouter(`goals`)} 
                className={
                  selected && 'text-bee-blue-clean bg-gray-200'
                }
              >
                Objetivos
              </button>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
              <button onClick={() => redirectRouter(`teams`)} 
                className={
                  selected && 'text-bee-blue-clean bg-gray-200'
                }
              >
                Times
              </button>
            )}
          </Tab>

          <Tab>
            {({ selected }) => (
              <button onClick={() => redirectRouter(`users`)} 
                className={
                  selected && 'text-bee-blue-clean bg-gray-200'
                }
              >
                Usuários
              </button>
            )}
          </Tab>
        </Tab.List>

        <div className='w-full'>
          <Tab.Panels className='text-white'>
            <Outlet />
            {/* <Tab.Panel>
              <WayOfBeing />
            </Tab.Panel> */}

            {/* <Tab.Panel>
              <Goals />
            </Tab.Panel>

            <Tab.Panel>
              <Teams />
            </Tab.Panel>

            <Tab.Panel>
              <Users />
            </Tab.Panel> */}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}