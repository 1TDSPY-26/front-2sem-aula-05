type Props = {
    sobrenome: string;
    outroSobrenome: string;
}

export default function Laura({ sobrenome, outroSobrenome }: Props ) {
    return(
        <h2>Laura {sobrenome} {outroSobrenome}</h2>
    )
}