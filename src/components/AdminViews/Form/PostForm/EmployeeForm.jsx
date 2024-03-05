import { useState } from 'react'
import { z } from 'zod'
import '../Form.css'
import { Input } from '../Input'
import { useForm } from '../../../../hooks/useForm'
import axios from 'axios'

const initialState = {
  name: '',
  surname: '',
  CI: '',
  email: '',
  birth_date: '',
  phone_number: '',
  emergency_number: '',
  insurance: ''
}

export const EmployeeForm = ({ state, setState }) => {
  const [formErrors, setFormErrors] = useState([])
  const [roleState, setRoleState] = useState('employee')

  const {
    formState,
    onInputChange,
    onResetForm
  } = useForm(initialState)

  const {
    name,
    surname,
    CI,
    email,
    birth_date,
    phone_number,
    emergency_number,
    insurance
  } = formState

  const formConfig = [
    { value: name, name: 'name', type: 'text', err: formErrors?.name },
    { value: surname, name: 'surname', type: 'text', err: formErrors?.surname },
    { value: CI, name: 'CI', type: 'text', err: formErrors?.CI },
    { value: email, name: 'email', type: 'email', err: formErrors?.email },
    { value: birth_date, name: 'birth_date', type: 'date', err: formErrors?.birth_date },
    { value: phone_number, name: 'phone_number', type: 'text', err: formErrors?.phone_number },
    { value: emergency_number, name: 'emergency_number', type: 'text', err: formErrors?.emergency_number },
    { value: insurance, name: 'insurance', type: 'text', err: formErrors?.insurance }
  ]

  const phoneRegex = new RegExp(
    /^([+]\d{1,3})(\d*)$/
  )

  const schema = z.object({

    name: z.string().min(1, { message: 'Name cannot be empty' }).refine((value) => { return /^\D+$/.test(value) }, { message: 'Name must not contain numeric values' }),
    surname: z.string().refine((value) => { return /^\D+$/.test(value) }, { message: 'Surname must not contain numeric values' }),
    CI: z.string().min(1),
    email: z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email.'),
    birth_date: z.coerce.date(),
    phone_number: z.string().min(10).regex(phoneRegex, 'Must contain the phone prefix eg. +598...'),
    emergency_number: z.string().min(10).regex(phoneRegex, 'Must contain the phone prefix eg. +598...'),
    insurance: z.string().min(1)

  })

  const onSelectChange = (e) => {
    setRoleState(e.target.value)
    console.log(roleState)
  }

  const onFormSubmit = (e) => {
    const postUrl = import.meta.env.VITE_BACKEND_URL + '/api/user/'
    console.log(formState)

    e.preventDefault()

    const result = schema.safeParse(formState)

    if (!result.success) {
      setFormErrors(result.error.format())
    } else {
      console.log(roleState)
      axios.post(postUrl, {
        ...formState,
        role_id: roleState === 'trainer' ? [3] : [5]
        // trainer_id: selectedTrainer === '' ? null : parseInt(selectedTrainer)
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
          'User added correctly'
        }
      </span>
      <div className="md:p-8 md:w-[90%] bg-light-backg text-light-secondary_op flex flex-col relative p-10 rounded-3xl h-[80%] w-[60%] min-w-[10rem] max-w-[30rem] boxshadow">
        <button onClick={() => setState()} className="md:p-1 md:top-3 md:right-3  md:bg-transparent md:text-light-secondary_op bg-light-primary rounded-xl absolute top-5 right-5 p-2 text-light-secondary hover:scale-[1.02] active:scale-[0.97] transition-all hover:scale-[0.99]">
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
        <h1 className="md:text-2xl md:mb text-left mb-10 text-3xl font-bold">
          Add new employee
        </h1>
        <form className="md:w-full md:gap-1 flex flex-col self-center items-center gap-3 overflow-y-auto h-full p-1 w-[90%]">
        {
          formConfig
            ? <>
            {
              formConfig.map((e, idx) =>
              <Input key={idx} {...e} fnc={onInputChange}/>
              )
            }
            <select onChange={onSelectChange} className="w-full min-h-12 rounded-xl pl-2 text-gray-400 bg-white">
              <option value={'trainer'}>Trainer</option>
              <option value={'employee'}>Employee</option>
            </select>
            </>
            : <></>
        }

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
