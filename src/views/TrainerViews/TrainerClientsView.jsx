import { useEffect, useState } from 'react'
import { DataTable } from '../../components/Trainer/TableComponent/DataTable'
import { getDataFilteredByFields } from '../../helpers/getDataFilteredByFields'
import { gymlink } from '../../api/gymlink'

const headers = ['user_id', 'name', 'surname', 'email']


export const TrainerClientsView = () => {
  const [filteredData, setFilteredData] = useState([])
  const [routine, setRoutine] = useState([])
  
  useEffect(() => {
    gymlink.get('api/user/trainer/clients', { withCredentials: true })
      .then(({ data }) => {
        // console.log(data.data)
        setFilteredData(getDataFilteredByFields(data.data, headers))
        setRoutine(data.data.map(client => {
          return {
            user_routines: client.user_routines.map(routine => routine.routine)
          }
        }))
      })
  }, [])


  return (
    <>
      <main className="flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <h2 className="text-4xl font-bold">My clients</h2>
        <div className="flex flex-row w-full h-full pb-28 bg-light-backg gap-14 md:flex-row">
          <DataTable routineExist={routine} data={filteredData} headers={headers} field={'client_id'}/>
        </div>
      </main>
    </>
  )
}
