import { useContext } from "react"
import { TrainerRoutinesContext } from "../../context/TrainerContext/RoutinesContext/TrainerRoutinesContext"

export const TrainerRoutinesView = () => {

  const { weekArray, mgArray} = useContext(TrainerRoutinesContext)

  return (
    <>
      {
      weekArray.week.length === 0
      ? <p>Empty</p>
      : weekArray.week.map((e, index) => <p key={index}>hola</p>)
    }
      <button onClick={() => {weekArray.pushDay(); console.log(weekArray)}}>
        Add Day
      </button>
    </>
  )
}
