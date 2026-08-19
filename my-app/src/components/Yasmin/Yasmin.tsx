
type tipoProps = {
    sobreNome1: string;
    sobreNome2: string;
}

export default function Yasmin({ sobreNome1, sobreNome2 }: tipoProps){
    return(
        <h2>Yasmin {sobreNome1} + " " + {sobreNome2}</h2>
    );
}