import { useState, useEffect } from 'react'
import { TrainerRoutinesContext } from './TrainerRoutinesContext'
import { Week } from './TrainerClasses'

export const TrainerRoutinesProvider = ({ children }) => {

  const [popUpConfirmState, setPopUpConfirmState] = useState(undefined)
  const [weekArray, setWeekArray] = useState(new Week)
  const [mgArray, setMgArray] = useState(undefined)
  const [mgMenuState, setMgMenuState] = useState(undefined)

  const pushNewDay = () => {
    
  }

  return (
      <TrainerRoutinesContext.Provider value={{popUpConfirmState, setPopUpConfirmState, weekArray, setWeekArray, mgArray, setMgArray, mgMenuState, setMgMenuState}}>
        {children}
      </TrainerRoutinesContext.Provider>
  )
}