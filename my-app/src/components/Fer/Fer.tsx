
type TipoProps = {
  sobrenome1: string;
  sobrenome2: string;
};

export default function Fer({sobrenome1, sobrenome2}: TipoProps) {
  return (
    <h2>Fer {sobrenome1 + " " + sobrenome2}</h2>
      
  );
}