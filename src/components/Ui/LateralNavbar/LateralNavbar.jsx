import { NavLink } from "react-router-dom"
import { PersonSvg, WarehouseSvg, PaperSvg, PersonsSvg} from './assets'

const linksData = [
  {'img_path': <PersonsSvg/>, 'title': 'Clientes', 'link':'clients'},
  {'img_path': <PersonSvg/>, 'title': 'Empleados', 'link':'employees'},
  {'img_path': <WarehouseSvg/>, 'title': 'Inventario', 'link':'inventory'},
  // {'img_path': <PaperSvg/>, 'title': 'Reglas', 'link':''}
]

export const LateralNavbar = () => {
  
  return (
      <nav className="group w-[7rem] overflow-hidden transition-all flex flex-col h-svh hover:w-[18rem] items-center bg-light-secondary p-8 group-hover:px-8 gap-12 text-light-secondary_op">
        <NavLink className="group flex w-full items-center justify-between transition-colors rounded-xl">
          <div className="min-w-12 h-12 rounded-xl bg-light-secondary_op"></div>
          <div className="w-0 group-hover:w-full opacity-0 group-hover:opacity-100 text-end transition-all group:hover pr-4">Facundo <br/> Sánchez</div>
        </NavLink>
        <ul className="w-full flex flex-col items-center justify-left gap-3">
          {
            linksData.map((e) =>
              (
                <li key={e.title} className="w-full flex items-center justify-center hover:text-light-secondary hover:bg-light-primary transition-colors rounded-[20px]">
                  <NavLink to={'/admin/' + e.link} className="flex items-center justify-left gap-14 w-full h-[3rem] p-3 text-m">
                    <div className="self-start">{e.img_path}</div>
                    <p className="w-fit text-center">{e.title}</p>
                  </NavLink>
                </li>
              )
            )
          }
        </ul>
      </nav> 
  )
}
