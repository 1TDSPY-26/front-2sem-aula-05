
type TipoProps = {
    sobreNome1:string;
    sobreNome2:string;
}

export default function Leo({sobreNome1,sobreNome2}:TipoProps){
    return(
        <h2>Leonardo {sobreNome1 + " " + sobreNome2}</h2>
    );
}