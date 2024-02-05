import { useContext } from "react";
import { AdminContext } from "../../../views/AdminViews/context/AdminContext";

export const DetailsCard = ({ data }) => {

  if (!data)
    return;

  const { selectId, setSelectedId } = useContext(AdminContext)

  const handleCloseClient = () => {
    setSelectedId({
      ...selectId,
      client_id: undefined
    })
  }


  const fullName = `${data.name} ${data.surname}`;

  return (
    <section className="bg-light-secondary text-light-secondary_op flex min-w-[30%] flex-col p-10 pt-15 rounded-2xl h-full relative">
      <button onClick={handleCloseClient}>
        <svg height="20px" width="20px" version="1.1" id="Capa_1"
          viewBox="0 0 490 490" xmlSpace="preserve" className="absolute top-5 right-5 hover:text-red-500 transition-colors">
          <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
          489.292,457.678 277.331,245.004 489.292,32.337" fill="currentColor"/>
        </svg>
      </button>
      <h2 className="text-3xl mb-5 font-bold">{fullName}</h2>
      <ul className="flex flex-col gap-4 pl-2">
        {
          Object.entries(data).map(([key, value], i) => {
            return (
              <li key={i} className="font-light text-lg">{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}: <span className="font-extralight">{value}</span></li>
            )
          })
        }
      </ul>
    </section>
  )
}
