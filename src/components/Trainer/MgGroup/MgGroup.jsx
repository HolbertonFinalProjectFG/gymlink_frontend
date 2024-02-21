import { AddNew } from '../AddNew';
import { Mg } from './Mg';
import { useState, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core'
import { gymlink } from "../../../api/gymlink"

export const MgGroup = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { attributes, setNodeRef } = useDroppable({
    id: 'mg_groups'
  })

  useEffect(() => {
    setLoading(true)
    gymlink.get("/api/mg").then(({data}) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, []);


  return (

    <section
      ref={setNodeRef}
      {...attributes}
      className="overflow-x-visible overflow-y-auto flex flex-1 items-center justify-start flex-row h-[95%] flex-wrap gap-5 p-5 border-4 border-light-secondary rounded-xl">
      <AddNew width={'50%'}/>
      {
        loading && (
          <h2>Loading...</h2>
        )
      }
      {
        !loading && !data && (<h2>Algo malio sal</h2>)
      }
      {
        !loading && data && data.map((e, idx) => <Mg key={idx} {...e}/>)
      }

    </section>
  );
};