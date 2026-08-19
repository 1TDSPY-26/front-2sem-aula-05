
type tipoProps = {
  sobreNome1: string;
  sobreNome2: string;
};




export default function Eliza({ sobreNome1, sobreNome2 }: tipoProps) {
  return (
      <h2>Eliza {sobreNome1 + " " + sobreNome2}</h2>
  );
}