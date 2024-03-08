export const Mg = (mg) => {

    return (
        <>
            <p className="text-white font-bold text-xl md:text-xl">{mg.mg.name}</p>
            <ul className="py-4 list-outside">
            {
                mg.mg.content.map((exercise, idx) => {
                    return (
                        <li key={idx} className="text-white p-2 font-medium md:text-base text-lg items-center break-all">
                            {`- ${exercise}`}
                        </li>
                    )
                })
            }
            </ul>
        </>
    )
}