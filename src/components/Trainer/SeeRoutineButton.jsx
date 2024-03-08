export const SeeRoutineButton = ({fnc, routineExist}) => {
  return (
    <button onClick={fnc} className='hover:scale-[1.02] transition-transform active:scale-[0.99] bg-light-primary p-2 rounded-lg text-light-secondary font-semibold'>{ routineExist !== null ? 'See routine' : 'Assign routine' }</button>
  )
}
