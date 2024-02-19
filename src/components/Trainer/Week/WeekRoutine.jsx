// This component is going to render DayRoutine components.
// Also is going to manage the global state of the week.

import { useDispatch, useSelector } from 'react-redux'
import { AddNew } from '../AddNew'
import { DayRoutine } from './DayRoutine'
import { addDayToWeek } from '../../../store'

export const WeekRoutine = () => {

  const dispatch = useDispatch()
  const { week } = useSelector((state) => state.trainerRoutines)

  return (
    <section className='flex flex-col w-[60%] h-full overflow-auto'>
      <ul className='flex flex-col gap-5 h-fit'>
        {
          week.length >= 0
          ? week.map((day, idx) => <DayRoutine key={idx} idx={idx} isLast={idx === week.length - 1 ? true : false}/>)
          : undefined
        }
        {
          week.length < 7
          ? <AddNew fnc={() => dispatch(addDayToWeek())}/>
          : undefined
        }
      </ul>
      {
        week.length > 0
        ? <button className='ml-auto mt-3 py-2 px-4 bg-light-primary rounded-xl text-light-backg'>
            Submit Routine
          </button>
        : undefined
      }
      
    </section>
  )
}
