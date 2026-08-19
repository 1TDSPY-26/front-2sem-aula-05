type TipoProps = {
    sobreNome1:string;
    sobreNome2:string;
}

export default function Rafael({sobreNome1,sobreNome2}:TipoProps){
    return(
        <h2>Rafael {sobreNome1 + " " + sobreNome2}</h2>
        
    );
}