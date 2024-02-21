// TrainerRoutinesView that contains the Weekly routine and
// also contains the mgGroup

import { useState } from "react"
import { WeekRoutine } from "../../components/Trainer"
import { MgGroup } from "../../components/Trainer/MgGroup/MgGroup"
import { DndContext } from '@dnd-kit/core'

export const TrainerRoutinesView = () => {

  const [weekArray, setweekArray] = useState([])

  const addDayToWeek = () => {
    setweekArray(weekArray => [...weekArray, []])
  }

  const popDayOfWeek = () => {
    if (weekArray.length <= 1)
      setweekArray([])
    else
      setweekArray(weekArray => [...weekArray.slice(0, -1)])
  }

  return (
    <main className="flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
      <h2 className="text-4xl font-bold">Routines</h2>
      <section className="flex flex-row gap-10 h-full">
        <DndContext onDragEnd={() => {}}>
          <WeekRoutine week={weekArray} add={addDayToWeek} pop={popDayOfWeek}/>
          <MgGroup />
        </DndContext>
      </section>
    </main>
  )
}
