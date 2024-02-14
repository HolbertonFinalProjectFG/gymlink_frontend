import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'
import './DataTable.css'
import { useEffect, useState } from 'react'

//

export const DataTable = ({ data, headers, field }) => {
  const [loading, setLoading] = useState(false)

  // const reqEndpoint = import.meta.env.VITE_BACKEND_URL + endpoint
  // const tableHeaders = ['user_id', 'name', 'surname', 'email',]

  useEffect(() => {
    data
      ? setLoading(false)
      : setLoading(true)

    // axios.get(reqEndpoint, {withCredentials: true})
    // .then(({ data }) => {
    //   console.log(data)
    //   setClientData(getDataFilteredByFields(data.data, tableHeaders))
    //   setLoading(false)
    // })
    // .catch((err) => {
    //   console.log(err)
    //   setLoading(false)
    // })
  }, [data])

  return (
    <div className="table-wrapper h-full w-full overflow-y-auto flex-2 rounded-2xl">
      {
        loading
          ? <h2>Loading...</h2>
          : <table className="w-full h-full rounded-2xl overflow-hidden">
          <TableHeader headers={headers}/>
          <tbody>
            {
              data
                ? data.map((obj, index) => (
                  <TableRow field={field} key={index} obj={obj}/>
                ))
                : []
            }
          </tbody>
        </table>
      }
    </div>
  )
}
