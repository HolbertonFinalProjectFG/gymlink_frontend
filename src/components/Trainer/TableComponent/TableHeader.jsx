export const TableHeader = ({ headers }) => {
  return (
    <thead className="sticky top-0 w-full bg-light-primary text-light-backg z-10">
      <tr className="text-left w-full">
      {
        headers
          ? headers.map((header, index) => {
            return (
            <th className="p-4 pl-6 capitalize" key={index}>{header.replace('_', ' ')}</th>
            )
          })
          : 'loading...'
      }
      <th className="p-4 pl-6 capitalize">Routine</th>
      </tr>
    </thead>
  )
}
