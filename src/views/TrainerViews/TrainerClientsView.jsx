import { useEffect, useState } from 'react'
// import { DetailsCard } from '../../components/AdminViews/DetailsCard/DetailsCard'
import { DataTable } from '../../components/Trainer/TableComponent/DataTable'
import { getDataFilteredByFields } from '../../helpers/getDataFilteredByFields'
import { gymlink } from '../../api/gymlink'


const headers = ['user_id', 'name', 'surname', 'email']

export const TrainerClientsView = () => {
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    gymlink.get('api/user/', { withCredentials: true })
      .then(({ data }) => {
        setFilteredData(getDataFilteredByFields(
          data.data,
          headers
        ))
      })
  }, [])


  return (
    <>
      <main className="md:p-5 md:pt-20 flex flex-col w-full gap-5 h-full p-10 bg-light-backg overflow-y-hidden">
        <h2 className="md:text-3xl text-4xl font-bold">My clients</h2>
        <div className="flex flex-row w-full h-full pb-28 bg-light-backg gap-14 md:flex-row">
          <DataTable data={filteredData} headers={headers} field={'client_id'}/>
          {/* <DetailsCard field='client_id'/> */}
        </div>
      </main>
    </>
  )
}
