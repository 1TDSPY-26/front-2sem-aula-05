type TipoProps = {
    sobreNome1:string;
    sobreNome2:string;
}


export default function Marcelo({sobreNome1,sobreNome2}:TipoProps){
    return(
        <h2>Marcelo {sobreNome1 + " " + sobreNome2}</h2>
        
    );
}