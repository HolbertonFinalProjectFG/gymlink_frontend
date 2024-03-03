export const Input = ({ type, name, value, fnc, err }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        className="input h-12 md:h-10 md:rounded-md bg-white text-gray-500"
        type={type} name={name} value={value}
        placeholder={(name[0].toUpperCase() + name.slice(1)).replace('_', ' ')} onChange={fnc}
      />
      <span className={
        `transition-opacity text-red-400 pl-2 md:pb-2 text-sm ${!err ? 'opacity-0' : 'opacity-100'}`}
      >
        {err ? err._errors[0] : '_' }
      </span>
    </div>
  )
}
