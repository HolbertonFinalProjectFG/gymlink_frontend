import { useContext, useState} from "react"
import { DetailsCard } from "../../components/AdminViews/DetailsCard/DetailsCard"
import { DataTable } from "../../components/AdminViews/TableComponent/DataTable"
import { fakeData } from "../../components/AdminViews/TableComponent/data"
import { AdminContext } from "./context/AdminContext"
import { ClientForm } from "../../components/AdminViews/Form/ClientForm"

export const AdminClientsView = () => {

  const { selectedId } = useContext(AdminContext)
  const [formOpen, setFormOpen] = useState(false)
  const selectedUser = fakeData.filter((e) => e.client_id === selectedId.client_id)

  const handleClose = () => {
    setFormOpen(false)
  }

  return (
    <>
      <main className="flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <h2 className="text-4xl font-bold">Clients</h2>
        <div className="flex flex-row w-full h-full pb-28 bg-light-backg gap-14 md:flex-row">
          <DataTable data={fakeData} headers={Object.keys(fakeData[0])}/>
          <DetailsCard data={selectedUser[0]}/>
          <button onClick={() => {setFormOpen(true)}} className="bg-light-primary rounded-xl absolute bottom-5 right-10 p-2 text-light-secondary hover:scale-[1.02] active:scale-[0.97] transition-all hover:scale-[0.99]">
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
          <ClientForm state={formOpen} setState={handleClose}/>
        </div>
      </main>
    </>
  )
}
