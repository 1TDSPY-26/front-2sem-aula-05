import Eliza from "./components/Eliza/Eliza";

export default function name() {
  // Declarar constantes e variáveis

  return(
    <div>
    {/** Aqui você cria todo conteúdo HTML de apresentação */}
      <h1>Meu Componente</h1>
      <Eliza sobreNome1="Duarte" sobreNome2="do Nascimento"/>
    </div>
  );
  
}