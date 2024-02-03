export const TableRow = ({ obj }) => {

  return (
    <tr className=" bg-light-secondary even:bg-light-backg hover:bg-light-primary_light transition-all cursor-pointer font-light min-h-[20rem]">
      {
        Object.values(obj).map((elem, index) => (
          <td className="p-4 whitespace-nowrap" key={index}>
            {elem}
          </td>
        ))
      }
    </tr>
  )
}
