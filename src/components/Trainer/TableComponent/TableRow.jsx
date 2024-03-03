import { useState } from 'react'
import { SeeRoutineButton } from '../SeeRoutineButton'
import { ShowRoutine } from '../Form/ShowRoutine'


export const TableRow = ({ obj, field, routineExist }) => {
  const [show, setShow] = useState(false)

  const handleSelectedClient = () => {
    console.log(selectedId)
    setSelectedId({
      ...selectedId,
      [field]: (obj.user_id === selectedId[field])
        ? undefined
        : obj.user_id
    })
  }

  const handleShowRoutine = () => {
    setShow(true)
  }



  return (
    <tr className="bg-light-secondary even:bg-light-backg transition-all font-light min-h-[20rem]">
      {
        Object.values(obj).map((elem, index) => {
          return <td onClick={handleSelectedClient} className="p-7 whitespace-nowrap" key={index}>
            {elem}
          </td>
        })
      }
      <td>
        <ShowRoutine show={show} setShow={setShow}/>
        <SeeRoutineButton fnc={() => handleShowRoutine()} routineExist={routineExist}/>
      </td>
    </tr>
  )
}
