import { useState } from 'react'
import { TrainerContext } from './TrainerContext'

export const TrainerProvider = ({ children }) => {

  const [selectedUserId, setSelectedUserId] = useState(undefined)

  return (
    <TrainerContext.Provider value={{ selectedUserId, setSelectedUserId }}>
      {children}
    </TrainerContext.Provider>
  )
}
