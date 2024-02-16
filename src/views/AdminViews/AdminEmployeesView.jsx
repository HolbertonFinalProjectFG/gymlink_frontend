import axios from 'axios'
import {
  useEffect,
  useState
} from 'react'
import { DetailsCard } from '../../components/AdminViews/DetailsCard/DetailsCard'
import { DataTable } from '../../components/AdminViews/TableComponent/DataTable'
import { EmployeeForm } from '../../components/AdminViews/Form/PostForm/EmployeeForm'
import { getDataFilteredByFields } from '../../helpers/getDataFilteredByFields'
import { PopUpConfirm } from '../../components/Ui/PopUpConfirm/PopUpConfirm'

const headers = ['user_id', 'name', 'surname', 'email']
const reqEndpoint = import.meta.env.VITE_BACKEND_URL + '/api/user/role/'

export const AdminEmployeesView = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    axios.get(reqEndpoint + '3', { withCredentials: true })
      .then(({ data: emplData }) => {
        axios.get(reqEndpoint + '5', { withCredentials: true })
          .then(({ data }) => {
            setFilteredData(getDataFilteredByFields(
              emplData.data.concat(data.data),
              headers
            ))
          })
      })
  }, [])

  const handleClose = () => {
    setFormOpen(false)
  }

  return (
    <>
      <main className="flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <PopUpConfirm/>
        <h2 className="text-4xl font-bold">Employees</h2>
        <div className="flex flex-row w-full h-full pb-28 bg-light-backg gap-14 md:flex-row">
          <DataTable data={filteredData} headers={headers} field={'employee_id'}/>
          <DetailsCard field='employee_id'/>
          <button onClick={() => { setFormOpen(true) }} className="bg-light-primary rounded-xl absolute bottom-5 right-10 p-2 text-light-secondary hover:scale-[1.02] active:scale-[0.97] transition-all hover:scale-[0.99]">
            <svg className="rotate-45" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_313_609)">
                <path d="M4 4L23.0919 23.0919" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                <path d="M4 23.0919L23.0919 4.00001" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              </g>
              <defs>
                <clipPath id="clip0_313_609">
                  <rect width="27" height="27" fill="currentColor"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <EmployeeForm state={formOpen} setState={handleClose}/>
        </div>
      </main>
    </>
  )
}
