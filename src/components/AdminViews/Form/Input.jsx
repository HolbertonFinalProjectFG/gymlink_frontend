
export const Input = ({ type, name, value, fnc, err }) => {
  console.log(err)
  return (
    <div className="flex flex-col gap-2  w-full">
      <input
        className="input h-12 capitalize"
        type={type} name={name} value={value}
        placeholder={name} onChange={fnc}
      />
      <span className={
        `transition-opacity text-red-400 pl-2 text-sm ${!err ? 'opacity-0': 'opacity-100'}`}
      >
        {err ? err._errors[0] : '_' }
      </span>
    </div>
  )
}
