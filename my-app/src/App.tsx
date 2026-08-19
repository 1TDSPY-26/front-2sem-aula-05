import Ale from "./components/Ale/Ale";

export default function App() {
  //Declarar constantes e variáveis

  const sobreNome1:string = "Carlos";
  const sobreNome2:string = "de Jesus";



  return ( 
    <div>
      {/** Aqui você cria todo conteúdo HTML de apresentação. */}
      <h1>Meu Componente</h1>
      <Ale sobreNome={[sobreNome1,sobreNome2]}/>
    </div>
  );

}


{/* <Ale sobreNome={{a:"Carlos",b:"de Jesus"}}/> */}