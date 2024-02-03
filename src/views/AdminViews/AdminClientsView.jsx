import { DetailsCard } from "../../components/AdminViews/DetailsCard/DetailsCard"
import { DataTable } from "../../components/AdminViews/TableComponent/DataTable"
import { fakeData } from "../../components/AdminViews/TableComponent/data"


export const AdminClientsView = () => {
  return (
    <>
      <main className="flex flex-row w-full h-full p-10 bg-light-backg gap-14">
        <DataTable data={fakeData} headers={Object.keys(fakeData[0])}/>
        <DetailsCard data={fakeData[0]}/>
      </main>
    </>
  )
}
