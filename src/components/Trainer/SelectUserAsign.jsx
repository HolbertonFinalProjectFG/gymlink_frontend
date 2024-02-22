import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { gymlink } from '../../api/gymlink'

export const SelectUserAsign = () => {

  const [clients, setClients] = useState([])

  useEffect(() => {
    gymlink.get("/api/user/trainer/")
  }, [])
  
  return (
    <div className="
      w-screen h-screen absolute top-0 left-0 flex items-center justify-center bg-light-secondary_op bg-opacity-50"
    >
      alskduj
    </div>
  )
}
