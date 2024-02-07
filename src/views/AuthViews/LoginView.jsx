import { LoginForm } from "../../components/Auth/LoginForm"
import video from '../../components/Auth/assets/Workout.mp4'
import './LoginView.css'

export const LoginView = () => {
  return (
	<main className="login-view relative w-screen h-screen flex flex-row items-center justify-around bg-light-secondary_op">
    <LoginForm/>

    <aside className="relative flex-1 w-full h-full overflow-hidden text-light-primary z-20">
      <img className="absolute left-0 right-0 top-0 bottom-0 m-auto z-40 w-[60%]" src="/logo.svg"/>
      <div className="absolute top-0 left-0 w-full h-full bg-light-primary opacity-50"></div>
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
      <source src={video} type="video/mp4"/>
    </video>
    </aside>
  </main>
  )
}
