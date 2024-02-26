// TrainerRoutinesView that contains the Weekly routine and
// also contains the mgGroup

import { useContext, useEffect, useState } from "react"
import { SelectUserAsign, WeekRoutine } from "../../components/Trainer"
import { MgGroup } from "../../components/Trainer/MgGroup/MgGroup"
import { DndContext } from '@dnd-kit/core'
import { ConfirmModal } from "../../components/Ui/Modals/ConfirmModal"
import { TrainerContext } from "../../context/TrainerContext/TrainerContext"
// import { gymlink } from "../../apis/gymlink"


export const TrainerRoutinesView = () => {
  
  const [weekArray, setweekArray] = useState([])
  const [active, setActive] = useState(null)

  const [submitModalOpen, setSubmitModalOpen] = useState(false)
  const [submitApproved, setSubmitApproved] = useState(false)

  const { selectedUser } = useContext(TrainerContext)
  
  const addMgToDay = (dragEvent) => {

    const elem = dragEvent.active.data
    const weekidx = dragEvent.over.id

    const nArr = [...weekArray]
    nArr[weekidx].push(elem.current)
  
    setweekArray(nArr)
  }

  const addDayToWeek = () => {
    setweekArray(weekArray => [...weekArray, []])
  }

  const handleDragStart = (event) => {
    setActive(event.active)
  }
  
  const handleDragEnd = (event) => {
    addMgToDay(event)
    setActive(null)
  }

  const popDayOfWeek = () => {
    if (weekArray.length <= 1)
      setweekArray([])
    else
      setweekArray(weekArray => [...weekArray.slice(0, -1)])
  }

  // When modal is approved the routine has to be submitted.

  useEffect(() => {

    if (submitApproved){

      const weekObj = {}
  
      weekArray.forEach((day, idx) => { // Function to formatting the array into a dictionary
        weekObj[idx + 1] = day.reduce((gmArr, currentGm) => {
          gmArr.push(currentGm.gm_template_id)
          return gmArr
        }, [])
      })

      console.log(
        {
          user_id: selectedUser,
          content: weekObj
        }
      )
      
      // gymlink.post("/api/routines",
      //   {
      //     user_id: selectedUser,
      //     content: weekObj
      //   }
      // )

      setSubmitApproved(false)
    }
  }, [submitApproved])
  

  return (
    <main className="flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <ConfirmModal
          open={submitModalOpen}
          setOpen={setSubmitModalOpen}
          setOption={setSubmitApproved}
          message={`Do you want to submit this routine to`}
        />
      <h2 className="text-4xl font-bold">Routines</h2>
      <section className="flex flex-row gap-10 h-full">
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <WeekRoutine week={weekArray} add={addDayToWeek} pop={popDayOfWeek} submitOpen={setSubmitModalOpen}/>
          <MgGroup active={active}/>
        </DndContext>
      </section>
    </main>
  )
}
