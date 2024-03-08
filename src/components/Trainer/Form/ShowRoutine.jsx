import { gymlink } from "../../../api/gymlink";
import { useContext, useEffect, useState } from "react";
import { TrainerContext } from "../../../context/TrainerContext/TrainerContext";

export const ShowRoutine = () => {
  
  const [data, setData] = useState({})
  const [routineLink, setRoutineLink] = useState('')
  const { selectedRoutine, setSelectedRoutine, setSelectedUser } = useContext(TrainerContext)

  useEffect(() => {
    if (selectedRoutine !== null){
      gymlink.get(`api/routines/${ selectedRoutine }`)
      .then(({ data }) => {
        setData(data.data);
      });
    }

    setRoutineLink(
      import.meta.env.VITE_PUBLIC_URL
      + `/routines/${ selectedRoutine }`
    )
  }, [selectedRoutine]);
  
  if (selectedRoutine === null)
    return;

  const handleDeleteRoutine = async () => {
    if (!confirm("Are you sure you want to delete this routine?")) {
      return;
    }
    try {
      await gymlink.delete(`api/routines/${selectedRoutine}`);
      console.log("Routine deleted successfully");
      setSelectedRoutine(null);
      setSelectedUser(undefined)
    } catch (error) {
      console.error("Error deleting routine", error);
    }
  };

  return (
    <div className="fixed z-30 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/[0.5] backdrop-blur-sm">
      <div className="min-w-[70%] min-h-[70%] flex flex-row rounded-2xl boxshadow bg-light-backg p-6 relative">
        {
          Object.keys(data).map((routineKey, idx) => (
            <section key={idx} className="flex flex-col">
              <h2 className="font-semibold text-3xl p-5">
                Day {routineKey}
              </h2>
              <section key={routineKey} className="flex flex-col gap-4 mx-4">
                {
                  data[routineKey].map((routine, index) => (
                    <div key={index} className="border-4 w-fit border-light-secondary bg-light-secondary_op text-light-backg rounded-xl p-5">
                      <h2 className="font-semibold text-3xl mb-3">
                        {routine.name}
                      </h2>
                      <ul className="flex flex-col gap-1">
                        {routine.content.map((exercise, idx) => (
                          <li key={idx}>{ exercise }</li>
                        ))}
                      </ul>
                    </div>
                  ))
                }
              </section>
            </section>
          ))
        }
        <button onClick={() => setSelectedRoutine(null)} className="bg-light-primary rounded-lg p-2 text-light-secondary flex justify-center mb-auto ml-24
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
        <button onClick={handleDeleteRoutine} className="bg-light-primary text-light-secondary font-semibold rounded-2xl m-auto py-2 px-4 absolute bottom-4 right-4
        hover:scale-[1.02] transition-transform active:scale-[0.99]">
          Borrar rutina
        </button>
        <p className="absolute bottom-10 left-10">
          {`Routine Link: `}
          <a href={routineLink} className="text-light-primary underline">
            {routineLink}
          </a>
        </p>
      </div>
    </div>
  );
};
