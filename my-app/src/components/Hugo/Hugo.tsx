
// type TipoProps = {
//     MiddleName: string
//     LastName: string
// }

// export default function Hugo({ MiddleName, LastName }: TipoProps) {
//     return (
//         <h2>Hugo {MiddleName} {LastName}</h2>
//     )
// }

type TipoProps = {
    suberNames: Array<string>
}

export default function Hugo({ suberNames }: TipoProps) {
    return (
        <h2>Hugo {suberNames.join(' ')}</h2>
    )
}