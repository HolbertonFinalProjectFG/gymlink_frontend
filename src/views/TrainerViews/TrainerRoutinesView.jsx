// TrainerRoutinesView that contains the Weekly routine and
// also contains the mgGroup

import { useContext, useEffect, useState } from "react"
import { SelectUserAsign, WeekRoutine } from "../../components/Trainer"
import { MgGroup } from "../../components/Trainer/MgGroup/MgGroup"
import { DndContext, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { ConfirmModal } from "../../components/Ui/Modals/ConfirmModal"
import { TrainerContext } from "../../context/TrainerContext/TrainerContext"
import { gymlink } from "../../api/gymlink"

export const TrainerRoutinesView = () => {
  
  const [active, setActive] = useState(null)
  const [weekArray, setweekArray] = useState([])

  const [submitModalOpen, setSubmitModalOpen] = useState(false)
  const [submitApproved, setSubmitApproved] = useState(false)

  const [mobileMgGroupOpen, setMobileMgGroupOpen] = useState(false)

  const { selectedUser } = useContext(TrainerContext)

  const sensors = useSensors(
    useSensor(TouchSensor)
  )
  
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
    setMobileMgGroupOpen(false)
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
  
      gymlink.post("/api/routines",
        {
          user_id: parseInt(selectedUser),
          content: weekObj
        }
      )
      .then(() => {
        setweekArray([])
      })

      setSubmitApproved(false)
    }
  }, [submitApproved])
  

  return (
    <main className=" md:p-5 md:pt-20 flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        {
          selectedUser !== undefined ?
          <ConfirmModal
            open={submitModalOpen}
            setOpen={setSubmitModalOpen}
            setOption={setSubmitApproved}
            message={`Do you want to submit this routine`}
          />
          :
          <SelectUserAsign
            open={submitModalOpen}
            setOpen={setSubmitModalOpen}
            setOption={setSubmitApproved}
          />

        }
      <h2 className="md:text-3xl text-4xl font-bold">Routines</h2>
      <section className="flex flex-row gap-10 h-full sm:flex-col">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <WeekRoutine week={weekArray} add={addDayToWeek} pop={popDayOfWeek} submitOpen={setSubmitModalOpen}/>
          <MgGroup active={active} mobileMenuOpen={mobileMgGroupOpen} setMobileMenuOpen={setMobileMgGroupOpen}/>
        </DndContext>
      </section>
    </main>
  )
}
