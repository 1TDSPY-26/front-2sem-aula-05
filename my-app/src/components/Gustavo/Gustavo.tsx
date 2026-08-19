type TipoProps = {
    sobreNome1: string;
    sobreNome2: string;
}




export default function Gustavo({ sobreNome1, sobreNome2 }:TipoProps) {
    return(
        <h2>Gustavo {sobreNome1} {sobreNome2}</h2>
        
    );
}