import { Mg } from '../../components/Routine/Mg'
import { useParams } from 'react-router-dom';
const data = {
  "1": [
      {
          "gm_template_id": 2,
          "name": "Pecho",
          "content": [
              "Press de banca",
              "Press de banca inclinado"
          ],
          "createdAt": "2024-02-20T20:29:30.982Z",
          "updatedAt": "2024-02-20T20:29:30.982Z",
          "gym_id": null
      },
      {
          "gm_template_id": 4,
          "name": "Pierna",
          "content": [
              "Sentadillas",
              "Camilla de femorales",
          ],
          "createdAt": "2024-02-20T20:31:08.943Z",
          "updatedAt": "2024-02-20T20:31:08.943Z",
          "gym_id": null
      }
  ],
  "2": [
      {
          "gm_template_id": 6,
          "name": "Espalda",
          "content": [
              "Jalon al pecho",
              "Remo con barra"
          ],
          "createdAt": "2024-02-21T17:01:13.164Z",
          "updatedAt": "2024-02-21T17:01:13.164Z",
          "gym_id": null
      },
      {
          "gm_template_id": 2,
          "name": "Pecho",
          "content": [
              "Press de banca",
              "Press de banca inclinado"
          ],
          "createdAt": "2024-02-20T20:29:30.982Z",
          "updatedAt": "2024-02-20T20:29:30.982Z",
          "gym_id": null
      }
  ],
  "3": [
    {
        "gm_template_id": 2,
        "name": "Pecho",
        "content": [
            "Press de banca",
            "Press de banca inclinado"
        ],
        "createdAt": "2024-02-20T20:29:30.982Z",
        "updatedAt": "2024-02-20T20:29:30.982Z",
        "gym_id": null
    },
    {
        "gm_template_id": 4,
        "name": "Pierna",
        "content": [
            "Sentadillas",
            "Camilla de femorales"
        ],
        "createdAt": "2024-02-20T20:31:08.943Z",
        "updatedAt": "2024-02-20T20:31:08.943Z",
        "gym_id": null
    }
],
}

export const RoutineView = () => {

  const {routine_id} = useParams()
  console.log(routine_id)
  
  const reqEndpoint = import.meta.env.VITE_BACKEND_URL + `api/routines/${routine_id}`
  
  // AGARRO LOS DATOS DE LA API

  
  return (
    <>
      <img src=''></img>
      <div className='pb-10 flex-col bg-light-backg w-full overflow-auto'>
        <h1 className='w-11/12 m-auto text-center py-6 text-4xl font-bold'>YOUR ROUTINE</h1>
        <div className='w-9/12 m-auto'>
          {
            Object.entries(data).map(([key, value]) => {
                 return (
                  <>
                  <h3 className='py-6 font-semibold text-3xl'>Day {key}</h3>
                  <div className='p-4 rounded-xl bg-light-primary'>
                    {
                      value.map((mg) => {
                        return (
                          <Mg mg={mg}/>
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
