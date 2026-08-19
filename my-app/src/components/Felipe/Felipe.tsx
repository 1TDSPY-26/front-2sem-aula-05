type TipoProps = {
  sobreNome1: string;
  sobreNome2: string;
};

export default function Felipe({ sobreNome }: { sobreNome: TipoProps }) {
  return <h2>Felipe {sobreNome.a + " " + sobreNome.b}</h2>;
}
