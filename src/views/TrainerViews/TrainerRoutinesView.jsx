// TrainerRoutinesView that contains the Weekly routine and
// also contains the mgGroup

import { WeekRoutine } from "../../components/Trainer"
import { MgGroup } from "../../components/Trainer/MgGroup/MgGroup"

export const TrainerRoutinesView = () => {

  return (
    <main  className="flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
      <h2 className="text-4xl font-bold">Routines</h2>
      <section className="flex flex-row gap-10">
        <WeekRoutine/>
        <MgGroup/>
      </section>
    </main>
  )
}
