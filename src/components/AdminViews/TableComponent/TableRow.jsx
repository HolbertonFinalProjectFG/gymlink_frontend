import { useContext } from "react"
import { AdminContext } from "../../../views/AdminViews/context/AdminContext"

export const TableRow = ({ obj }) => {

  const { selectedId, setSelectedId} = useContext(AdminContext)

  const handleSelectedClient = () => {
    
    setSelectedId({
      ...selectedId,
      client_id: obj.client_id
    })

  }

  return (
    <tr onClick={handleSelectedClient} className=" bg-light-secondary even:bg-light-backg hover:bg-light-primary_light transition-all cursor-pointer font-light min-h-[20rem]">
      {
        Object.values(obj).map((elem, index) => (
          <td className="p-4 whitespace-nowrap" key={index}>
            {elem}
          </td>
        ))
      }
    </tr>
  )
}
