import { useState } from 'react'
import { z } from 'zod'
import '../Form.css'
import { Input } from '../Input'
import { useForm } from '../../../../hooks/useForm'
import axios from 'axios'

const initialState = {
  item_name: '',
  quantity: 0
}

export const InventoryForm = ({ state, setState }) => {
  const [formErrors, setFormErrors] = useState([])

  const {
    formState,
    onInputChange,
    onResetForm
  } = useForm(initialState)

  const {
    item_name,
    quantity
  } = formState

  const formConfig = [
    { value: item_name, name: 'item_name', type: 'text', err: formErrors?.item_name }
  ]

  const schema = z.object({
    item_name: z.string().min(1),
    quantity: z.coerce.number()
  })

  const onFormSubmit = (e) => {
    e.preventDefault()

    console.log(formState)

    const postUrl = import.meta.env.VITE_BACKEND_URL + '/api/inventory/'
    const result = schema.safeParse(formState)

    if (!result.success) {
      setFormErrors(result.error.format())
    } else {
      axios.post(postUrl, {
        ...formState,
        quantity: parseInt(quantity)
      }, { withCredentials: true })
        .then(({ data }) => {
          if (data.ok === true) {
            setFormErrors(undefined)
            onResetForm()
            setTimeout(() => setFormErrors([]), 3000)
          }
        })
    }
  }

  return (
    <div className={` ${state ? 'flex' : 'hidden'} w-screen h-screen absolute top-0 left-0 z-40 flex-col items-center justify-center bg-black/[0.5] backdrop-blur-sm`}>
      <span className={`${formErrors === undefined ? 'opacity-100' : 'opacity-0'} transition-opacity rounded-xl   absolute top-5 right-5 bg-green-500 px-4 py-2 text-light-secondary`}>
        {
          'item added correctly'
        }
      </span>
      <div className="md:p-8 md:w-[90%] bg-light-backg text-light-secondary_op flex flex-col relative p-10 rounded-3xl w-[60%] min-w-[10rem] max-w-[30rem] boxshadow">
        <button onClick={() => setState()} className="md:p-1 md:top-3 md:right-3 md:bg-transparent md:text-light-secondary_op bg-light-primary rounded-xl absolute top-5 right-5 p-2 text-light-secondary hover:scale-[1.02] active:scale-[0.97] transition-all hover:scale-[0.99]">
          <svg className='md:scale-75' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_313_609)">
              <path d="M4 4L23.0919 23.0919" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
              <path d="M4 23.0919L23.0919 4.00001" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
            </g>
            <defs>
              <clipPath id="clip0_313_609">
                <rect width="27" height="27" fill="currentColor"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <h1 className="md:text-2xl md:mb-5 text-left mb-10 text-3xl font-bold">
          Add new item
        </h1>
        <form className="md:w-full md:gap-1 flex flex-col self-center items-center gap-3 overflow-y-auto h-full p-1 w-[90%]">
        {
          formConfig
            ? formConfig.map((e, idx) =>
            <Input key={idx} {...e} fnc={onInputChange}/>
            )
            : <></>
        }
        <div className="flex flex-col gap-2 w-full">
        <input
          className="input h-12 md:h-10 md:rounded-md bg-white text-gray-500"
          type='number' min={0} name='quantity' value={quantity}
          placeholder='Quantity' onChange={onInputChange}
        />
        <span className={
          `transition-opacity text-red-400 pl-2 text-sm ${!formErrors?.quantity ? 'opacity-0' : 'opacity-100'}`}
        >
          {formErrors?.quantity ? formErrors.quantity._errors[0] : '_' }
        </span>
      </div>
        </form>
        <button className="
          md:w-[80%] mt-10 bg-light-primary ml-auto mr-auto w-full
          min-h-[3rem] text-lg font-bold text-light-secondary rounded-[10px]
          hover:scale-[1.01] transition-transform active:scale-[0.99]"
          onClick={onFormSubmit}
        >
          Send
        </button>
      </div>
    </div>
  )
}
