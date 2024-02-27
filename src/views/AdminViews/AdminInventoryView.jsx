import axios from 'axios'
import {
  useEffect,
  useState
} from 'react'
import { DataTable } from '../../components/AdminViews/TableComponent/DataTable'
import { getDataFilteredByFields } from '../../helpers/getDataFilteredByFields'
import { InventoryForm } from '../../components/AdminViews/Form/PostForm/InventoryForm'
import { gymlink } from '../../api/gymlink'

const headers = ['item_name', 'quantity']

export const AdminInventoryView = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    gymlink.get('/api/inventory')
      .then(({ data }) => {
        setFilteredData(getDataFilteredByFields(
          data.data,
          headers
        ))
      })
  }, [])

  const handleClose = () => {
    setFormOpen(false)
  }

  return (
    <>
      <main className="md:p-5 md:pt-20 flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <h2 className="md:text-3xl text-4xl font-bold">Inventory</h2>
        <div className="flex flex-row w-full h-full pb-28 bg-light-backg gap-14 md:flex-row">
          <DataTable data={filteredData} headers={headers}/>
          <button onClick={() => { setFormOpen(true) }} className="bg-light-primary rounded-xl absolute bottom-5 right-10  md:right-5 p-2 md:p-1 text-light-secondary active:scale-[0.97] transition-all hover:scale-[0.99]">
            <svg className="rotate-45 md:scale-75" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <InventoryForm state={formOpen} setState={handleClose}/>
        </div>
      </main>
    </>
  )
}
