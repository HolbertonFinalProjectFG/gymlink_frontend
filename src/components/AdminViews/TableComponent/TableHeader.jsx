export const TableHeader = ({headers}) => {
  return (
    <tr className="text-left">
    {
      headers
      ? headers.map((header, index) => {
        return(
          <th className="p-4 pl-6 capitalize" key={index}>{header}</th>
        )
      })
      : 'loading...'
    }
  </tr>
  )
}
