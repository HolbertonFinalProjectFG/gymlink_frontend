import { useState } from 'react'
import { TrainerContext } from './TrainerContext'

export const TrainerProvider = ({ children }) => {

  const [selectedUser, setSelectedUser] = useState(undefined)
  const [selectedRoutine, setSelectedRoutine] = useState(null)

  return (
    <TrainerContext.Provider value={{ selectedUser, setSelectedUser, selectedRoutine, setSelectedRoutine }}>
      {children}
    </TrainerContext.Provider>
  )
}
