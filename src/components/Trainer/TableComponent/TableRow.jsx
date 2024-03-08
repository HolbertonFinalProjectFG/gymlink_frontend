import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SeeRoutineButton } from '../SeeRoutineButton'
import { TrainerContext } from '../../../context/TrainerContext/TrainerContext'

export const TableRow = ({ obj, field, routineId}) => {
  
  const [selectedId, setSelectedId] = useState(null)
  const { setSelectedRoutine, setSelectedUser } = useContext(TrainerContext)

  const navigate = useNavigate()

  const handleSelectedClient = () => {
    setSelectedId({
      ...selectedId,
      [field]: (obj.user_id === selectedId[field])
        ? undefined
        : obj.user_id
    })
  }

  const handleShowRoutine = () => {

    if (routineId === null){
      navigate('/trainer/routines')
      setSelectedUser(obj.user_id)
    }

    setSelectedRoutine(routineId)
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
      <td>
        <SeeRoutineButton
          fnc={() => handleShowRoutine()}
          routineId={routineId}
        />
      </td>
    </tr>
  )
}
