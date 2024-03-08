import { useEffect, useState } from 'react'
import { DataTable } from '../../components/Trainer/TableComponent/DataTable'
import { getDataFilteredByFields } from '../../helpers/getDataFilteredByFields'
import { gymlink } from '../../api/gymlink'
import { ShowRoutine } from '../../components/Trainer/Form/ShowRoutine'

const headers = ['user_id', 'name', 'surname', 'email']

export const TrainerClientsView = () => {
  
  const [filteredData, setFilteredData] = useState([])
  const [routines, setRoutines] = useState([])
  
  useEffect(() => {
    gymlink.get('api/user/trainer/clients', { withCredentials: true })
      .then(({ data }) => {

        setFilteredData(
          getDataFilteredByFields(data.data, headers)
        )

        let boolRoutinesClients = []

        data.data.map((client) => {
          boolRoutinesClients.push(
            client.user_routines[0].routine_id
          )
        })

        setRoutines(boolRoutinesClients)

      })
  }, [])

  return (
    <>
      <main className="md:p-5 md:pt-20 flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <ShowRoutine/>
        <h2 className="md:text-3xl text-4xl font-bold">My clients</h2>
        <div className="flex flex-row w-full h-full pb-28 bg-light-backg gap-14 md:flex-row">
          <DataTable
            routineData={routines}
            data={filteredData}
            headers={headers}
            field={'client_id'}
          />
        </div>
      </main>
    </>
  )
}
