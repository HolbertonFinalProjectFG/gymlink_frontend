import { useContext} from "react"
import { DetailsCard } from "../../components/AdminViews/DetailsCard/DetailsCard"
import { DataTable } from "../../components/AdminViews/TableComponent/DataTable"
import { fakeData } from "../../components/AdminViews/TableComponent/data"
import { AdminContext } from "./context/AdminContext"


export const AdminClientsView = () => {

  const { selectedId } = useContext(AdminContext)
  const selectedUser = fakeData.filter((e) => e.client_id === selectedId.client_id)
  console.log(selectedUser)

  return (
    <>
      <main className="flex flex-col w-full h-full p-10 bg-light-backg gap-14 md:flex-row">
        <DataTable data={fakeData} headers={Object.keys(fakeData[0])}/>
        <DetailsCard data={selectedUser[0]}/>
      </main>
    </>
  )
}
