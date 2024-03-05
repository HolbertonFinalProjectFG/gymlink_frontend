import { useState } from 'react'
import { SeeRoutineButton } from '../SeeRoutineButton'
import { ShowRoutine } from '../Form/ShowRoutine'


export const TableRow = ({ obj, field, routineExist }) => {
  const [show, setShow] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  // console.log(obj)

  const handleSelectedClient = () => {
    setSelectedId({
      ...selectedId,
      [field]: (obj.user_id === selectedId[field])
        ? undefined
        : obj.user_id
    })
  }
  console.log(selectedId)
  const handleShowRoutine = () => {
    setShow(true)
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
        <SeeRoutineButton fnc={() => handleShowRoutine()} routineExist={routineExist}/>
        <ShowRoutine fnc2={() => handleSelectedClient} show={show} setShow={setShow}/>
      </td>
    </tr>
  )
}
