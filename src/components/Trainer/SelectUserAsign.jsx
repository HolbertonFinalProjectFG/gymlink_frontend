import React, { useContext, useEffect, useState } from 'react';
import { gymlink } from '../../api/gymlink';
import { TrainerContext } from '../../context/TrainerContext/TrainerContext';

export const SelectUserAsign = ({ open, setOpen, setOption }) => {
  const [trainerClients, setTrainerClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(undefined);

  const { setSelectedUser } = useContext(TrainerContext)

  const handleSubmit = (e) => {
    setSelectedUser(selectedClient)
  };

  useEffect(() => {
    if (open) {
      gymlink.get("/api/user/trainer/clients")
        .then(({ data }) => {
          setTrainerClients(data.data); // Assuming `data` is the array of clients
        })
        .catch((err) => console.log(err));
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center bg-light-secondary_op bg-opacity-50 z-50">
      <div className="flex flex-col gap-10 items-center justify-center bg-light-backg p-10 rounded-xl">
        <h2 className='text-xl font-bold '>Select a user to assign this routine</h2>
        <select defaultValue={""} className='w-full h-10 px-4 rounded-xl' onChange={(e) => setSelectedClient(e.target.value)}>
          <option value="" disabled>Select your option</option>
          {
            trainerClients.map((client, idx) => 
              <option key={idx} value={client.user_id}>
                {client.name}
              </option>
            )
          }
        </select>
        <button onClick={(e) => { handleSubmit(e); }} className="mt-auto border bg-white hover:bg-light-secondary_op hover:text-light-secondary transition-colors py-3 px-10 rounded-xl">
          Submit
        </button>
      </div>
    </div>
  );
};
