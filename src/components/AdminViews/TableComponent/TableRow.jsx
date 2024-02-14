import { useContext } from 'react'
import { AdminContext } from '../../../context/AdminContext/AdminContext'
import axios from 'axios'
import Trash from './assets/Trash.svg'

export const TableRow = ({ obj, field }) => {
  const { selectedId, setSelectedId } = useContext(AdminContext)

  const handleSelectedClient = () => {
    setSelectedId({
      ...selectedId,
      [field]: (obj.user_id === selectedId[field])
        ? undefined
        : obj.user_id

    })
  }

  const handleDelete = () => {
    const url = import.meta.env.VITE_BACKEND_URL + '/api/user'
    axios.delete(url)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
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
      <td className='' onClick={handleDelete}>
        <button className="flex flex-col items-center justify-center h-full hover:scale-110 transition-transform">
          <img className="w-8 h-8" src={ Trash }/>
        </button>
      </td>
    </tr>
  )
}
