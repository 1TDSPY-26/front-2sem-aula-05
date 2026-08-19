import Victor from "./components/victor/victor";
import victor from "./components/victor/victor";

export default function App() {
  //declarar constatante e variaveis

  return (
    <div>
      {/** Aqui voce cria todo conteudo HTML de apresentasao */}
      <h1>
        Meu componente
      </h1>
      <Victor sobreNome={{ a: "velasco ", b: "guzman" }} />


    </div>


  );
}
