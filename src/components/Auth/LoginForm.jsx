import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

const initialState = {
  email: 'admin@gmail.com',
  password: 'adminadmin'
}

export const LoginForm = () => {

  const [logInState, setLogInState] = useState('admin')
  const { formState, email, password, onInputChange } = useForm(initialState)
  const [loginError, setLoginError] = useState(false)
  const loginUrl = import.meta.env.VITE_BACKEND_URL + '/api/login'
  const navigate = useNavigate()

  const handleOnChangeProfile = (e) => {
    setLogInState(e.target.value)
    if (e.target.value === 'admin'){
      formState.email = 'admin@gmail.com'
      formState.password = 'adminadmin'
    } else {
      formState.email = 'trainer@gmail.com'
      formState.password = '12332146'      
    }
  }
  

  const handleSubmit = (e) => {

    
    e.preventDefault()

    setLoginError(false)

    axios.post(
      loginUrl,
      formState,
      {withCredentials: true}
    )

    .then(({data}) => {
      navigate('/' + data.role_name)
    })

    .catch((err) => {
      console.log(err)
      setLoginError(true)
    })
  }

  return (
    <section className="w-full h-full flex flex-[2] flex-col items-center justify-center relative z-20 p-8">
      <span
        className={`bg-red-400 px-4 py-1
        rounded-xl text-light-secondary
        transition-opacity
        ${loginError ? 'opacity-100 h-fit' : 'opacity-0'}`}
        >Not valid credentials
      </span>
      <form className="flex flex-col w-full max-w-[25rem] md:w-[22rem] sm:w-full sm:max-w-[20rem] justify-start bg-light-backg p-10 sm:p-8 m-4 rounded-lg">
        <h1 className="text-4xl sm:text-3xl font-bold pb-1.5">Login</h1>
        <p className="text-sm text-login-fontLight text-gray-500">Sign in into your account</p>
        <div className="flex flex-col pt-8 sm:pt-4 gap-6 sm:gap-4">
          <input name="email" value={email} onChange={onInputChange}       className="p-2.5 sm:text-sm rounded-lg sm:rounded-md bg-transparent border border-gray-500 border-opacity-50 focus:outline-none focus:border-gray-700 transition ease-in-out" type="text" placeholder="Email"></input>
          <input name="password" value={password} onChange={onInputChange} className="p-2.5 sm:text-sm rounded-lg sm:rounded-md bg-transparent border border-gray-500 border-opacity-50 focus:outline-none focus:border-gray-700 transition ease-in-out"  type="password" placeholder="Password"></input>
        </div>
        <Link to={'/'} className="text-sm text-login-accent pt-4 pl-1 hover:text-light-primary transition-colors ease-in-out">Forgot password?</Link>
        <button onClick={handleSubmit} type="submit" className="p-2 mt-20 sm:mt-10 font-bold bg-login-accent text-login-form rounded-lg text-xl sm:text-base bg-light-primary text-white hover:scale-[0.99] transition ease-in-out">Login</button>
        <hr className="h-px my-4 border-0 bg-gray-400"/>
        <p className="text-gray-400 text-center mt-4 sm:text-sm">Need an account? <Link className="underline text-login-accent text-light-primary transition-colors ease-in-out" to={'/'}>Talk with us</Link></p>
      </form>
      <div className="bg-light-primary p-2 px-3 rounded-md text-light-secondary">
        Log in as {logInState === 'admin' ? 'an ' : 'a '}
        <select onChange={handleOnChangeProfile}>
          <option value='admin'>Admin</option>
          <option value='trainer'>Trainer</option>
        </select>
      </div>
    </section>
  )
}