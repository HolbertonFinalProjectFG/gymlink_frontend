import { TableHeader } from "./TableHeader"
import { TableRow } from "./TableRow"
import './DataTable.css'

export const DataTable = ({ data, headers }) => {

  return (
    <div className="table-wrapper h-full w-full overflow-y-scroll flex-2 rounded-xl">
      <table className="w-full h-full flex-1">
        <thead className="sticky top-0 w-full bg-light-primary text-light-backg z-10">
        <TableHeader headers={headers}/>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <TableRow key={index} obj={obj}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
