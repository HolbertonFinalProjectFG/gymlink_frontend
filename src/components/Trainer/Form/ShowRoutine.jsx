import { gymlink } from "../../../api/gymlink"
import { useState, useEffect } from "react"

export const ShowRoutine = ({show, setShow}) => {
  if (!show)
    return

  const [data, setData] = useState([])

  useEffect(() => {
    gymlink.get('api/user/trainer/clients', { withCredentials: true })
      .then(({ data }) => {
        setData(data.data.map(client => {
          return {
            user_routines: client.user_routines
          }
        }))
      })
  }, [])
    console.log(data)

  const handleCloseRoutine = () => {
    setShow(false);
  }

  const handleCloseRoutineClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div onClick={handleCloseRoutine} className="fixed z-10 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/[0.5] backdrop-blur-sm">
        <div onClick={handleCloseRoutineClick} className="flex flex-row rounded-2xl boxshadow bg-light-backg p-6 relative">
          <section className="flex flex-col gap-4 mx-4">
            <h2 className="font-semibold text-3xl">
              Dia 1
            </h2>
            <ul className="border-4 w-fit border-light-secondary bg-light-secondary_op text-light-backg rounded-xl p-5">
              
            </ul>
          </section>
          <button onClick={handleCloseRoutine} className="bg-light-primary rounded-lg p-2 text-light-secondary flex justify-center mb-auto ml-24
            hover:scale-[1.02] transition-transform active:scale-[0.99]">
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
          <button className="bg-light-primary text-light-secondary font-semibold rounded-2xl m-auto py-2 px-4 absolute bottom-4 right-4
          hover:scale-[1.02] transition-transform active:scale-[0.99]">
            Borrar rutina
          </button>
        </div>
    </div>
  )
}
