import Marcelo from "./components/marcelo/marcelo";

export default function App () {
  //declarar constantes e variaveis

  return(
    <div>
      {/**  aqui vc cria todo conteudo html de
      apresentaçao */}
        <h1>Meu Componente</h1>
        <Marcelo sobreNome1="Junior" sobreNome2="Da Mata"/>
    </div>



  );

}

