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
      + `/routine/${ selectedRoutine }`
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
    <div className="absolute z-30 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/[0.5] backdrop-blur-sm md:p-6 sm:p-3">
      <div className="w-full h-fit md:max-w-[80%] min-h-[60%] sm:max-w-full sm:max-h-[calc(100%-5rem)] sm:mt-10 max-w-[60%] max-h-[80%] rounded-2xl boxshadow bg-light-backg md:p-3 p-6 relative flex flex-col">
        <section className="w-full h-full flex md:flex-col overflow-auto gap-10 flex-1">
            {
              Object.keys(data).map((routineKey, idx) => (
                <article key={idx} className="flex flex-col min-w-fit">
                  <h2 className="font-semibold text-3xl p-5">
                    Day {routineKey}
                  </h2>
                  <div key={routineKey} className="min-w-fit flex flex-row md:flex-col gap-4 mx-4">
                    {
                      data[routineKey].map((routine, index) => (
                        <div key={index} className="border-4 flex-1 border-light-secondary bg-light-secondary_op text-light-backg rounded-xl p-5">
                          <h2 className="font-semibold text-2xl md:text-xl mb-3">
                            {routine.name}
                          </h2>
                          <ul className="flex flex-col gap-2 md:text-sm">
                            {routine.content.map((exercise, idx) => (
                              <li key={idx}>- { exercise }</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </article>
              ))
            }
        </section>
        <button onClick={() => setSelectedRoutine(null)} className="absolute top-5 right-5 bg-light-primary rounded-lg p-2 text-light-secondary flex justify-center mb-auto
          hover:scale-[1.02] transition-transform active:scale-[0.99] md:scale-75">
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
        <div className="w-full h-fit flex md:gap-4 flex-row md:flex-col items-end justify-between mt-auto">
          <p className="self-end md:pt-5 md:self-start">
            {`Routine Link: `}
            <a href={routineLink} className="text-light-primary underline">
              {routineLink}
            </a>
          </p>
          <button onClick={handleDeleteRoutine} className="md:text-base bg-light-primary text-light-secondary font-semibold rounded-2xl py-2 px-4
          hover:scale-[1.02] transition-transform active:scale-[0.99] md:w-full">
            Borrar rutina
          </button>
        </div>
      </div>
    </div>
  );
};
