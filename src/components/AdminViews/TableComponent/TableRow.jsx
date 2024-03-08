import { useContext } from 'react'
import { AdminContext } from '../../../context/AdminContext/AdminContext'
import Trash from './assets/Trash.svg'
import Edit from './assets/Edit.svg'

export const TableRow = ({ obj, field }) => {
  const { selectedId, setSelectedId } = useContext(AdminContext)
  const { deleteState, setDeleteState } = useContext(AdminContext)
  const { putState, setPutState } = useContext(AdminContext)

  const handleSelectedClient = () => {
    console.log(selectedId)
    setSelectedId({
      ...selectedId,
      [field]: (obj.user_id === selectedId[field])
        ? undefined
        : obj.user_id

    })
  }

  const handleDelete = () => {
    console.log('Trash clicked')
    setDeleteState({
      ...deleteState,
      user_id: obj.user_id,
      open: true
    })
  }

  const handleEdit = () => {
    setPutState({
      ...putState,
      user_id: obj.user_id,
      open: true
    })
  }

  return (
    <tr className="md:text-sm bg-light-secondary even:bg-light-backg hover:bg-light-primary_light transition-all cursor-pointer font-light min-h-[20rem]">
      {
        Object.values(obj).map((elem, index) => {
          return <td onClick={handleSelectedClient} className="md:p-4 p-7 whitespace-nowrap" key={index}>
            {elem}
          </td>
        })
      }
      <td className='flex items-center justify-end mr-8 md:mr-3 gap-3 self-center h-full'>
        <button onClick={handleDelete} className="flex flex-col items-center justify-center h-full hover:scale-110 transition-transform">
          <img className="md:min-w-6 md:max-h-6 min-w-8 h-8" src={ Trash }/>
        </button>
        <button onClick={handleEdit} className="flex flex-col items-center justify-center h-full hover:scale-110 transition-transform">
          <img className="md:min-w-8 md:max-h-8 min-w-10 h-10" src={ Edit }/>
        </button>
      </td>
    </tr>
  )
}
