import { useState } from "react"
import { useForm } from "./hooks/useForm"
import { z } from 'zod'
import './Form.css'
import { Input } from "./Input"

const initialState = {
  name: '',
  surname: '',
  ci: '',
  email: '',
  birth_date: '',
  phone_number: '',
  emergency_number: '',
  insurance: ''
}

export const ClientForm = ({ state, setState }) => {

  const [formErrors, setFormErrors] = useState([]);

  const {
    formState,
    onInputChange
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
    {value: name, name: 'name',type: 'text', err: formErrors.name},
    {value: surname, name: 'surname',type: 'text', err: formErrors.surname},
    {value: CI, name: 'CI',type: 'text', err: formErrors.CI},
    {value: email, name: 'email',type: 'email', err: formErrors.email},
    {value: birth_date, name: 'birth_date',type: 'date', err: formErrors.birth_date},
    {value: phone_number, name: 'phone_number',type: 'text', err: formErrors.phone_number},
    {value: emergency_number, name: 'emergency_number',type: 'text', err: formErrors.emergency_number},
    {value: insurance, name: 'insurance',type: 'text', err: formErrors.insurance},
  ]

  const phoneRegex = new RegExp(
    /^([+]\d{1,3})(\d*)$/
  );

  const schema = z.object({
    
    name: z.string().min(1, {message: "Name cannot be empty"}).refine((value) => {return /^\D+$/.test(value);}, {message: 'Name must not contain numeric values'}),
    surname: z.string().refine((value) => {return /^\D+$/.test(value);}, {message: 'Surname must not contain numeric values'}),
    CI: z.string().min(1),
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    birth_date: z.coerce.date(),
    phone_number: z.string().min(10).regex(phoneRegex, 'Must contain the phone prefix eg. +598...'),
    emergency_number: z.string().min(10).regex(phoneRegex, 'Must contain the phone prefix eg. +598...'),
    insurance: z.string().min(1)

  })

  const onFormSubmit = (e) => {
    e.preventDefault();
    schema.spa(formState)
    .then(({ error }) => {
      setFormErrors(error.format())
    })
    console.log(formState)
  }

  return (
    <div className={` ${ state ? 'flex': 'hidden' } w-screen h-screen absolute top-0 left-0 z-40 flex-col items-center justify-center bg-black/[0.5] backdrop-blur-sm`}>
      <div className="bg-light-backg text-light-secondary_op flex flex-col relative p-10 rounded-3xl h-[80%] w-[60%] min-w-[10rem] max-w-[30rem] boxshadow">
        <button onClick={() => setState()} className="bg-light-primary rounded-xl absolute top-5 right-5 p-2 text-light-secondary hover:scale-[1.02] active:scale-[0.97] transition-all hover:scale-[0.99]">
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <h1 className="text-left mb-10 text-3xl font-bold">
          Add new client
        </h1>
        <form className="flex flex-col self-center items-center gap-3 overflow-y-auto h-full p-1 w-[90%]">
        {
          formConfig
          ? formConfig.map((e, idx) => 
            <Input key={idx} {...e} fnc={onInputChange}/>
          )
          : <></>
        }
        </form>
        <button className="
          mt-10 bg-light-primary ml-auto mr-auto w-full
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
