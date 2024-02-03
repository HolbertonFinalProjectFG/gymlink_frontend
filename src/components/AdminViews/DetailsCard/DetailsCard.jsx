export const DetailsCard = ({ data }) => {
  const fullName = `${data.name} ${data.surname}`;

  return (
    <section className="bg-light-secondary text-light-secondary_op flex min-w-[30%] flex-col p-10 rounded-2xl h-full">
      <h2 className="text-3xl mb-5 font-bold">{fullName}</h2>
      <ul className="flex flex-col gap-4 pl-2">
        {
          Object.entries(data).map(([key, value], i) => {
            return (
              <li key={i} className="font-light text-lg">{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}: <span className="font-extralight">{value}</span></li>
            )
          })
        }
      </ul>
    </section>
  )
}
