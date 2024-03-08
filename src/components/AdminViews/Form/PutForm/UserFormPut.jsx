import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from '../../../../hooks/useForm'
import { Input } from '../Input'
import { z } from 'zod'
import '../Form.css'
import { AdminContext } from '../../../../context/AdminContext/AdminContext'

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

export const UserFormPut = ({ state, setState }) => {
  const [formErrors, setFormErrors] = useState([])
  const [trainers, setTrainers] = useState([]) // Selects all the trainers from the database
  const [putData, setPutData] = useState({})
  const [selectedTrainer, setSelectedTrainer] = useState(undefined) // This State is used on the trainers selector.
  const { putState, setPutState } = useContext(AdminContext)

  const {
    formState,
    onInputChange,
    onResetForm
  } = useForm(putData.length > 0 ? putData[0] : initialState)

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
    { value: name ?? '', name: 'name', type: 'text', err: formErrors?.name },
    { value: surname ?? '', name: 'surname', type: 'text', err: formErrors?.surname },
    { value: CI ?? '', name: 'CI', type: 'text', err: formErrors?.CI },
    { value: email ?? '', name: 'email', type: 'email', err: formErrors?.email },
    { value: birth_date.split('T')[0] ?? '', name: 'birth_date', type: 'date', err: formErrors?.birth_date },
    { value: phone_number ?? '', name: 'phone_number', type: 'text', err: formErrors?.phone_number },
    { value: emergency_number ?? '', name: 'emergency_number', type: 'text', err: formErrors?.emergency_number },
    { value: insurance ?? '', name: 'insurance', type: 'text', err: formErrors?.insurance }
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
    setSelectedTrainer(e.target.value)
  }

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + '/api/user/' + putState.user_id

    if (putState.user_id !== undefined) {
      axios.get(url, { withCredentials: true })
        .then(({ data }) => setPutData(data.data))
    }
  }, [putState.user_id])

  const onFormSubmit = (e) => {
    const patchUrl = import.meta.env.VITE_BACKEND_URL + '/api/user/' + putData[0].user_id
    console.log(putData)

    e.preventDefault()

    const result = schema.safeParse(formState)

    if (!result.success) {
      setFormErrors(result.error.format())
    } else {
      axios.patch(patchUrl, {
        ...formState,
        role_id: [4], // Falta la seccin para poder asignar un cliente
        trainer_id: selectedTrainer === '' ? null : parseInt(selectedTrainer)
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

  useEffect(() => {
    const reqUrl = import.meta.env.VITE_BACKEND_URL + '/api/user/role/3'

    if (putState.open) {
      axios.get(reqUrl, { withCredentials: true })
        .then(({ data }) => setTrainers(data.data))
        .catch((err) => console.log(err))
    }
  }, [putState.open])

  return (
    <div className={` ${putState.open ? 'flex' : 'hidden'} w-screen h-screen absolute top-0 left-0 z-40 flex-col items-center justify-center bg-black/[0.5] backdrop-blur-sm`}>
      <span className={`${formErrors === undefined ? 'opacity-100' : 'opacity-0'} transition-opacity rounded-xl   absolute top-5 right-5 bg-green-500 px-4 py-2 text-light-secondary`}>
        {
          'User edited correctly'
        }
      </span>
      <div className="md:p-8 md:w-[90%] bg-light-backg text-light-secondary_op flex flex-col relative p-10 rounded-3xl h-[80%] w-[60%] min-w-[10rem] max-w-[30rem] boxshadow">
        <button onClick={() => { setPutState({ ...putState, open: false }) }} className="md:p-1 md:top-3 md:right-3  md:bg-transparent md:text-light-secondary_op bg-light-primary rounded-xl absolute top-5 right-5 p-2 text-light-secondary hover:scale-[1.02] active:scale-[0.97] transition-all hover:scale-[0.99]">
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
          Edit user
        </h1>
        <form className="md:w-full md:gap-1 flex flex-col self-center items-center gap-3 overflow-y-auto h-full p-1 w-[90%]">
        {
          formConfig
            ? formConfig.map((e, idx) =>
            <Input key={idx} {...e} fnc={onInputChange}/>
            )
            : <></>
        }
        <select value={undefined} onChange={onSelectChange} defaultValue={undefined} className="w-full min-h-12 rounded-xl pl-2 text-gray-400">
          <option value=''>Trainer not assigned</option>
          {
            trainers
              ? trainers.map((trainer, idx) =>
              <option key={idx} value={trainer.user_id}>
                {trainer.name + ' ' + trainer.surname}
              </option>
              )

              : <option></option>
          }
        </select>
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
