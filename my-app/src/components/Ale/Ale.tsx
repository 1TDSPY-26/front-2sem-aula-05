
type TipoProps = {
    sobreNome:Array<string>;
}

export default function Ale({sobreNome}:TipoProps){


    return(
        <h2>Alexandre {sobreNome[0] + " " + sobreNome[1]}</h2>
        
    );
}



// export default function Ale({sobreNome}:{sobreNome:TipoProps}){
//     return(
//         <h2>Alexandre {sobreNome.a + " " + sobreNome.b}</h2>
        
//     );
// }


// type TipoProps = {
//     sobreNome1:string;
//     sobreNome2:string;
// }

// export default function Ale({sobreNome1,sobreNome2}:TipoProps){
//     return(
//         <h2>Alexandre {sobreNome1 + " " + sobreNome2}</h2>
        
//     );
// }