import { useContext } from 'react'
import Warning from './assets/Warning.svg'
import { AdminContext } from '../../../context/AdminContext/AdminContext'
import axios from 'axios'

export const PopUpConfirm = ({ field }) => {
  const {
    deleteState,
    setDeleteState

  } = useContext(AdminContext)

  const handleYesBtn = () => {
    if (deleteState[field] !== undefined) {
      const reqUrl = import.meta.env.VITE_BACKEND_URL + `/api/${field !== 'item_id' ? 'user' : 'inventory' }/${deleteState[field]}`
      axios.delete(reqUrl, { withCredentials: true })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
      setDeleteState({ ...deleteState, open: false })
    }
  }

  return (
    <div className={`${deleteState?.open ? 'flex' : 'hidden'} md:p-5 w-screen h-screen absolute top-0 left-0 z-40 flex-col items-center justify-center bg-black/[0.3] backdrop-blur-sm`}>
      <div className='flex flex-col gap-5 bg-light-backg rounded-xl p-6'>
        <div className='flex justify-around items-center gap-4'>
          <img className='md:w-12 w-15 h-15' src={ Warning }/>
          <h3 className='md:text-center text-light-secondary_op'>Do you want to delete this user?<br/>It will be deleted permanently</h3>
        </div>
        <p></p>
        <div className='w-full flex gap-5 md:text-sm'>
          <button onClick={() => { setDeleteState({ ...deleteState, open: false, [field]: undefined }) }} className='w-full px-4 py-1 hover:scale-105 transition-transform rounded-xl border border-stone-300'>No</button>
          <button onClick={handleYesBtn} className='w-full px-4 py-1 hover:scale-105 transition-transform bg-red-500 rounded-xl text-light-backg'>Yes</button>
        </div>
      </div>
    </div>
  )
}
