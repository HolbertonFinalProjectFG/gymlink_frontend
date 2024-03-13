import { useEffect, useState } from 'react';
import { gymlink } from '../../api/gymlink';
import { Mg } from '../../components/Routine/Mg'
import { useParams } from 'react-router-dom';

export const RoutineView = () => {

  const [routineData, setRoutineData] = useState([])
  const { routine_id } = useParams()
  
  useEffect(() => {
    gymlink.get(`api/routines/${routine_id}`)
    .then(({ data }) => {
      setRoutineData(data.data)
    })
  }, [routine_id])
  
  return (
    <>
      <img src=''></img>
      <div className='pb-10 flex-col bg-light-backg w-full overflow-auto'>
        <h1 className='w-full m-auto text-center py-6 text-4xl md:text-3xl font-bold'>YOUR ROUTINE</h1>
        <div className='md:w-full w-1/2 px-10 md:p-5 m-auto'>
          {
            Object.entries(routineData).map(([key, value]) => {
                 return (
                  <>
                  <h3 className='py-6 font-semibold text-3xl md:text-xl'>Day {key}</h3>
                  <div className='p-4 rounded-xl bg-light-primary'>
                    {
                      value.map((mg, idx) => {
                        return (
                          <Mg key={idx} mg={mg}/>
                        )
                      })
                    }
                  </div>
                  </>
                )
            })
          }
        </div>
      </div>
    </>

  )
}
