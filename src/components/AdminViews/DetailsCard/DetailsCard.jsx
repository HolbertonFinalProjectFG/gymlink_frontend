import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AdminContext } from '../../../context/AdminContext/AdminContext'

export const DetailsCard = ({ field }) => {
  const { selectedId, setSelectedId } = useContext(AdminContext)
  const [loading, setLoading] = useState(false)
  const [cardData, setCardData] = useState({})

  const handleCloseClient = () => {
    setSelectedId({
      ...selectedId,
      [field]: undefined
    })
  }

  useEffect(() => {
    if (selectedId[field] !== undefined) {
      setLoading(true)
      const reqEndpoint = import.meta.env.VITE_BACKEND_URL + '/api/user/' + selectedId[field]
      console.log(reqEndpoint)
      axios.get(reqEndpoint, { withCredentials: true })
        .then(({ data }) => {
          setCardData(data.data[0])
          setLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [selectedId[field]])

  const fullName = `${cardData.name} ${cardData.surname}`

  return (
    <section className={`${selectedId[field] === undefined ? 'hidden' : ''} bg-light-secondary text-light-secondary_op flex min-w-[30%] flex-col p-10 pt-15 rounded-2xl relative overflow-y-auto`}>
      <button onClick={handleCloseClient}>
        <svg height="20px" width="20px" version="1.1" id="Capa_1"
          viewBox="0 0 490 490" xmlSpace="preserve" className="absolute top-5 right-5 hover:text-red-500 transition-colors">
          <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490
          489.292,457.678 277.331,245.004 489.292,32.337" fill="currentColor"/>
        </svg>
      </button>
      {
        loading
          ? <h2>Loading...</h2>
          : <>
          <h2 className="text-3xl mb-5 font-bold">{fullName}</h2>
          <ul className="flex flex-col gap-4 pl-2">
            {
              Object.entries(cardData).map(([key, value], i) => {
                return (
                  <li key={i} className="font-light text-lg">{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}: <span className="font-extralight">{value}</span></li>
                )
              })
            }
          </ul>
        </>

      }
    </section>
  )
}
