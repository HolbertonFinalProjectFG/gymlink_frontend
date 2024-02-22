
export const ConfirmModal = ({open, setOpen, setOption, message}) => {

  if (!open)
    return

  return (
    <div className="
      w-screen h-screen absolute top-0 left-0 z-50 flex items-center justify-center bg-light-secondary_op bg-opacity-50"
    >
      <div className="
        flex flex-col items-center gap-10 justify-center bg-light-backg rounded-xl p-10 z-100"
      >
        <p className="text-xl">{message}</p>
        <div className="flex flex-row gap-10">
          <button
          onClick={() => {setOpen(false); setOption(false)}}
          className="
            border px-10 py-2 rounded-xl hover:text-white hover:bg-black transition-colors">
            No
          </button>
          <button
          onClick={() => {setOpen(false); setOption(true)}}
          className="
            border px-10 py-2 rounded-xl hover:text-white hover:bg-black transition-colors">
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}
