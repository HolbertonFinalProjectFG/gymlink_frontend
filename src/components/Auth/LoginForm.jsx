import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Cookies from "js-cookie"
import { useState } from "react"

const initialState = {
  email: '',
  password: ''
}

export const LoginForm = () => {

  const { formState, email, password , onInputChange } = useForm(initialState)
  const [loginError, setLoginError] = useState(false)
  const loginUrl = import.meta.env.VITE_BACKEND_URL + '/api/login'
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    
    e.preventDefault()

    setLoginError(false)

    axios.post(
      loginUrl,
      formState,
      {withCredentials: true}
    )

    .then(({data}) => {
      console.log(data) // Recibir el rol correspondiente desde el back y redirigir a esa pestaña
      navigate('/' + data.role_name)
    })

    .catch((err) => {
      console.log(err)
      setLoginError(true)
    })
  }

  return (
    <section className="w-full h-full flex flex-[2] flex-col items-center justify-center relative z-20 bg-light-secondary_op bg-opacity-70">
      <span
        className={` bg-red-400 px-4 py-1
        rounded-xl text-light-secondary
        transition-opacity
        ${loginError ? 'opacity-100' : 'opacity-0'}`}
        >Not valid credentials
      </span>
      <form className="flex flex-col w-full max-w-[25rem] justify-start bg-light-backg p-10 m-4 rounded-lg">
        <h1 className="text-4xl font-bold pb-1.5">Login</h1>
        <p className="text-sm text-login-fontLight text-gray-500">Sign in into your account</p>
        <div className="flex flex-col pt-8 gap-6">
          <input name="email" value={email} onChange={onInputChange} className="h-12 p-2.5 rounded-lg bg-transparent border border-gray-500 border-opacity-50 focus:outline-none focus:border-gray-700 transition ease-in-out" type="text" placeholder="Email"></input>
          <input name="password" value={password} onChange={onInputChange} className="h-12 p-2.5 rounded-lg bg-transparent border border-gray-500 border-opacity-50 focus:outline-none focus:border-gray-700 transition ease-in-out"  type="password" placeholder="Password"></input>
        </div>
        <Link to={'/'} className="text-sm text-login-accent pt-4 pl-1 hover:text-light-primary transition-colors ease-in-out">Forgot password?</Link>
        <button onClick={handleSubmit} type="submit" className="p-2 mt-20 font-bold bg-login-accent text-login-form rounded-lg text-xl bg-light-primary text-white hover:scale-[0.99] transition ease-in-out">Login</button>
        <hr className="h-px my-4 border-0 bg-gray-400"/>
        <p className="text-gray-400 text-center mt-4">Need an account? <Link className="underline text-login-accent text-light-primary transition-colors ease-in-out" to={'/'}>Talk with us</Link></p>
      </form>
    </section>
  )
}