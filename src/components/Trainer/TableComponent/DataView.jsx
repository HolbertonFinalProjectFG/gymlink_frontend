import { DataTable } from "./DataTable"
import { fakeData } from "./data"

export const DataView = () => {
  return (
    <main className="w-svw h-svh flex items-center justify-center bg-light-backg">
      <DataTable data={fakeData} headers={Object.keys(fakeData[0])}/>
    </main>
  )
}
