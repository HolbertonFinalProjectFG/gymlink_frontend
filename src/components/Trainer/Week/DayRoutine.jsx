// This component renderizes each day of the weekly routine.
// is going to have mgRoutines as childs that can be draggable

//To do: Make each day droppable.

import { useDroppable } from '@dnd-kit/core'
import { Mg } from '../MgGroup/Mg'

export const DayRoutine = ({mgRoutines, idx, isLast, pop}) => {
  const { attributes, setNodeRef } = useDroppable({
    id: idx
  })

  return (
    <div ref={setNodeRef} {...attributes}>
      <h3 className="text-3xl font-bold text-light-primary pb-3">Day {idx + 1}</h3>
      <div className="w-full flex-wrap h-fit min-h-[10rem] relative p-10 flex flex-row gap-5 items-center justify-left border-4 border-light-secondary rounded-xl">
        <button onClick={() => {confirm("Delete?") ? pop(): null}} className={`${isLast ? 'flex' : 'hidden'} items-center justify-center absolute top-3 right-3 bg-light-primary text-light-backg w-10 h-10 p-2 rounded-xl`}>
          <svg width="23" height="5" viewBox="0 0 27 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.736328" y="6.86719" width="6.04918" height="26.2131" rx="3.02459" transform="rotate(-90 0.736328 6.86719)" fill="#F6F3F3"/>
          </svg>
        </button>
        {
          mgRoutines && mgRoutines.map((e, idx) => <Mg key={idx} {...e} idx={idx}/>)
        }
      </div>
    </div>
  )
}
