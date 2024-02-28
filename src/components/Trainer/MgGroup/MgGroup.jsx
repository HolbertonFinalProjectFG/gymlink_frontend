import { AddNew } from '../AddNew'
import { Mg } from './Mg'
import { useState, useEffect, useRef } from 'react'
import { DragOverlay, useDroppable } from '@dnd-kit/core'
import { gymlink } from '../../../api/gymlink'
import { AddMg } from '../Form/AddMg'
import { Loader } from '../../Ui/Loader/Loader'

import '../Scrollbar.css'

export const MgGroup = ({ active }) => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { attributes, setNodeRef } = useDroppable({
    id: 'mg_groups'
  })

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

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
    <>
      {
        windowSize[0] <= 767 ?
        <section className={`${mobileMenuOpen ? '-translate-y-1/2' : ''} hidden md:block transition-transform duration-500 w-full h-full bg-light-primary md:fixed top-[calc(100%-3rem)] right-0`}>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='w-full flex p-3 items-center justify-center'>
              <svg className={`${mobileMenuOpen ? '' : 'rotate-180'} w-8 h-8`} width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8.5 8L16 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div
              ref={setNodeRef}
              {...attributes}
              className=' bg-white items-center mx-8 h-[40%] mt-5 rounded-2xl flex flex-col gap-5 p-5 overflow-auto'>
              
              {
                loading && (
                  <Loader/>
                )
              }
              {
                !loading && data && data.map((e, idx) => <Mg key={idx} {...e}/>)
              }

            </div>
        </section>
        :
        <section
          ref={setNodeRef}
          {...attributes}
          className="items-center overflow-y-auto overflow-x-hidden flex flex-col flex-1 justify-center h-[95%] gap-5 p-5 border-4 border-light-secondary rounded-xl max-w-fit">
          <AddNew fnc={() => showFormAddMg()} long={true}/>
          {
            loading && (
              <Loader/>
            )
          }
          {
            !loading && data && data.map((e, idx) => <Mg key={idx} {...e}/>)
          }
          <AddMg show={show} setShow={setShow}/>
        </section>
      }
      <DragOverlay>
          {
            active?.id
              ? <Mg {...active.data.current}/>
              : null
          }
        </DragOverlay>
    </>
  )
}
