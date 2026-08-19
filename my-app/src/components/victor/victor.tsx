type TipoProps = 
{
    a: string;
    b: string;
}
export default function victor({sobreNome}:{sobreNome :TipoProps}){
    return (
        <h2>Hugo {sobreNome.a +" " + sobreNome.b}</h2>
    );
}