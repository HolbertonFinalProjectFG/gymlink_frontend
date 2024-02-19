// Dotted component that executes the fnc function when clicked.
// This function can be to add a new day or a new muscular group element.

export const AddNew = ({fnc}) => {

  return (
    <li className="w-full h-fit min-h-[10rem] flex flex-col items-center justify-center border-4 border-light-primary border-dotted rounded-xl">
      <button onClick={fnc} className="flex items-center justify-center p-5 text-light-primary border-2 border-light-primary rounded-full text-6xl hover:scale-105 transition-transform">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 1.5L19.5 36.5" stroke="#F09518" strokeWidth="3" strokeLinecap="round"/>
          <path d="M1.5 18.5H36.5" stroke="#F09518" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </button>
    </li>
  )
}
