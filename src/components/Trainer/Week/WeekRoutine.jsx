// This component is going to render DayRoutine components.
// Also is going to manage the global state of the week.

import { AddNew } from '../AddNew'
import { DayRoutine } from './DayRoutine'

import '../Scrollbar.css'

export const WeekRoutine = ({add, pop, week, submitOpen}) => {

  return (
    <section className='scrollbar flex flex-col flex-2 h-[95%] overflow-auto md:flex-1 max-h-[calc(100svh-15rem)]'>
      <ul className='flex flex-col gap-5 h-fit'>
        {
          week.length >= 0 &&
          week.map((dayInfo, idx) => {
            return(
              <DayRoutine mgRoutines={dayInfo} pop={pop} key={idx} idx={idx} isLast={idx === week.length - 1 ? true : false}/>
            )
          })
        }
        {
          week.length < 7
          ? <AddNew fnc={() => {add()}} long={true}/>
          : undefined
        }
      </ul>
      {
        week.length > 0
        ? <button onClick={() => {submitOpen(true)}} className='ml-auto mt-3 py-2 px-4 bg-light-primary rounded-xl text-light-backg hover:scale-[0.99] transition-transform active:scale-[0.96]'>
            Submit Routine
          </button>
        : undefined
      }
      
    </section>
  )
}
