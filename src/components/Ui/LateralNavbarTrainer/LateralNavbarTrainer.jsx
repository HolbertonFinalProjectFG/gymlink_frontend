import { NavLink, Outlet } from 'react-router-dom'
import { PersonsSvg, RoutineSvg } from './assets'
import { useState } from 'react'
import { HamMenu } from '../LateralNavbarAdmin/assets'

const linksData = [
  { img_path: <PersonsSvg/>, title: 'Clients', link: 'clients' },
  { img_path: <RoutineSvg/>, title: 'Routines', link: 'routines' },
  // {'img_path': <PaperSvg/>, 'title': 'Reglas', 'link':''}
]

export const LateralNavbarTrainer = () => {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <nav className="group w-[7rem] md:hidden overflow-hidden transition-all flex flex-col h-svh hover:w-[18rem] items-center bg-light-secondary p-8 group-hover:px-8 gap-12 text-light-secondary_op">
        <NavLink className="group flex w-full items-center justify-between transition-colors rounded-xl">
          <div className="min-w-12 h-12 rounded-xl bg-light-secondary_op"></div>
          <div className="w-0 group-hover:w-full opacity-0 group-hover:opacity-100 text-end transition-all group:hover pr-4">Facundo <br/> Sánchez</div>
        </NavLink>
        <ul className="w-full flex flex-col items-center justify-left gap-3">
          {
            linksData.map((e) =>
              (
                <li key={e.title} className="w-full flex items-center justify-center hover:text-light-secondary hover:bg-light-primary transition-colors rounded-[20px]">
                  <NavLink to={'/trainer/' + e.link} className="flex items-center justify-left gap-14 w-full h-[3rem] p-3 text-m">
                    <div className="self-start">{e.img_path}</div>
                    <p className="w-fit text-center">{e.title}</p>
                  </NavLink>
                </li>
              )
            )
          }
        </ul>
      </nav>

      <nav className="hidden md:flex fixed top-0 left-0 z-40 w-full bg-light-secondary">
        <div className='flex flex-row bg-light-black items-center justify-between w-full px-4 py-4 h-14'>
          <button onClick={() => {setNavOpen(!navOpen)}}>
            <HamMenu/>
          </button>
          <img className='w-8 h-8 text-light-primary' src='/logo.svg'></img>
          <div className="min-w-8 h-8 rounded-lg bg-light-secondary_op"></div>
        </div>

      </nav>
      <div onClick={() => {setNavOpen(false)}} className={`${!navOpen ? 'hidden' : 'visible'} bg-light-secondary_op w-full h-full absolute top-0 left-0 bg-opacity-10 z-30`}></div>
      <ul className={`hidden md:flex ${!navOpen ? '-translate-x-full' : ''} transition-transform h-full flex-col absolute pt-16 left-0 items-center justify-left gap-1 p-3 w-1/2 min-w-fit z-30 bg-light-secondary`}>
        {
          linksData.map((e) =>
            (
              <li onClick={() => setNavOpen(false)} key={e.title} className="w-full flex items-center justify-center hover:text-light-secondar transition-colors rounded-[20px]">
                <NavLink to={'/trainer/' + e.link} className="flex items-center justify-left gap-14 w-full h-[3rem] p-3 text-m">
                  <p className="w-fit text-center text-base">{e.title}</p>
                </NavLink>
              </li>
            )
          )
        }
      </ul>
      <Outlet/>
    </>
    
  )
}
