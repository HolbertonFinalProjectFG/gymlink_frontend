import React, { useContext } from 'react'
import Warning from './assets/Warning.svg'
import { AdminContext } from '../../../context/AdminContext/AdminContext'
import axios from 'axios'

export const PopUpConfirm = () => {
  const {
    deleteState,
    setDeleteState

  } = useContext(AdminContext)

  const handleYesBtn = () => {
    if (deleteState.user_id !== undefined) {
      const reqUrl = import.meta.env.VITE_BACKEND_URL + `/api/user/${deleteState.user_id}`
      axios.delete(reqUrl, { withCredentials: true })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
      setDeleteState({ ...deleteState, open: false })
    }
  }

  return (
    <div className={`${deleteState?.open ? 'flex' : 'hidden'} w-screen h-screen absolute top-0 left-0 z-40 flex-col items-center justify-center bg-black/[0.3] backdrop-blur-sm`}>
      <div className='flex flex-col gap-5 bg-light-backg rounded-xl p-6'>
        <div className='flex justify-around items-center gap-4'>
          <img className='w-15 h-15 text-red-500' src={ Warning }/>
          <h3 className=' text-light-secondary_op'>Do you want to delete this user?<br/>It will be deleted permanently</h3>
        </div>
        <p></p>
        <div className='w-full flex gap-5'>
          <button onClick={() => { setDeleteState({ ...deleteState, open: false, user_id: undefined }) }} className='w-full px-4 py-1 hover:scale-105 transition-transform rounded-xl border border-stone-300'>No</button>
          <button onClick={handleYesBtn} className='w-full px-4 py-1 hover:scale-105 transition-transform bg-red-500 rounded-xl text-light-backg'>Yes</button>
        </div>
      </div>
    </div>
  )
}
