import { useState } from 'react'
import { TrainerClientContext } from './TrainerClientContext'


export const TrainerClientProvider = ({ children }) => {

  const [popUpConfirmState, setPopUpConfirmState] = useState(undefined)
  const [routineInfoMenuOpen, setRoutineInfoMenuOpen] = useState(undefined)

  const addNew = () => {
    setRoutineInfoMenuOpen([...routineInfoMenuOpen, []])
  }

  return (
      <TrainerClientContext.Provider value={{popUpConfirmState, setPopUpConfirmState, routineInfoMenuOpen, setRoutineInfoMenuOpen, addNew }}>
        {children}
      </TrainerClientContext.Provider>
  )
}
