import { AddNew } from '../AddNew'
import { Mg } from './Mg'
import { useState, useEffect } from 'react'
import { DragOverlay, useDroppable } from '@dnd-kit/core'
import { gymlink } from '../../../api/gymlink'
import { AddMg } from '../Form/AddMg'
import { Loader } from '../../Ui/Loader/Loader'

import '../Scrollbar.css'

export const MgGroup = ({ active }) => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { attributes, setNodeRef } = useDroppable({
    id: 'mg_groups'
  })

  useEffect(() => {
    setLoading(true)
    gymlink.get('/api/mg').then(({ data }) => {
      setData(data.data)
    })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  const showFormAddMg = () => {
    setShow(true)
  }

  return (
    <section
      ref={setNodeRef}
      {...attributes}
      className="overflow-y-auto overflow-x-hidden flex flex-col flex-1 items-center justify-left h-[95%] gap-5 p-5 border-4 border-light-secondary rounded-xl max-w-fit">
      <AddNew fnc={() => showFormAddMg()} long={true}/>
      {
        loading && (
          <Loader/>
        )
      }
      {
        !loading && data && data.map((e, idx) => <Mg key={idx} {...e}/>)
      }
      <DragOverlay>
        {
          active?.id
            ? <Mg {...active.data.current}/>
            : null
        }
      </DragOverlay>
      <AddMg show={show} setShow={setShow}/>
    </section>
  )
}
