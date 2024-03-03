export const Mg = (mg) => {

    return (
        <>
            <p className="text-white font-bold text-xl">{mg.mg.name}</p>
            <ul className="py-4">
            {
                mg.mg.content.map((exercise) => {
                    return (<li className="font-medium text-lg items-center break-all"><p className= "text-white">• {exercise}</p></li>)
                })
            }
            </ul>
        </>
    )
}