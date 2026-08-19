type TipoProps = {
    sobreNome:string;
}

export default function Joao({sobreNome}:TipoProps){
    return(
        <h2>Joao Paulo {sobreNome}</h2>
        
    );
}