import { useContext } from 'react'
import { AdminContext } from '../../../context/AdminContext/AdminContext'


export const TableRow = ({ obj, field }) => {
  const { selectedId, setSelectedId } = useContext(AdminContext)

  const handleSelectedClient = () => {
    console.log(selectedId)
    setSelectedId({
      ...selectedId,
      [field]: (obj.user_id === selectedId[field])
        ? undefined
        : obj.user_id

    })
  }

  return (
    <tr className="bg-light-secondary even:bg-light-backg hover:bg-light-primary_light transition-all cursor-pointer font-light min-h-[20rem]">
      {
        Object.values(obj).map((elem, index) => {
          return <td onClick={handleSelectedClient} className="p-7 whitespace-nowrap" key={index}>
            {elem}
          </td>
        })
      }
    </tr>
  )
}
