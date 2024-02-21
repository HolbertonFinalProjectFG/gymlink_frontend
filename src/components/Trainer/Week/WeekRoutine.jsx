// This component is going to render DayRoutine components.
// Also is going to manage the global state of the week.

import { AddNew } from '../AddNew'
import { DayRoutine } from './DayRoutine'

export const WeekRoutine = ({add, pop, week}) => {

  return (
    <section className='flex flex-col flex-2 h-[95%] overflow-auto'>
      <ul className='flex flex-col gap-5 h-fit'>
        {
          week.length >= 0 &&
          (week.map((day, idx) => <DayRoutine pop={pop} key={idx} idx={idx} isLast={idx === week.length - 1 ? true : false}/>))
        }
        {
          week.length < 7
          ? <AddNew fnc={() => {add()}} long={true}/>
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
