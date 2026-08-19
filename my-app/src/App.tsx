import Hugo from "./components/Hugo/Hugo"

export default function App(){
  return (
    <div>
      <h1>Meu Componente</h1>
      <div>
        <Hugo suberNames={["Leite", "Chimendes", "Silva", "Oliveira"]} />
      </div>
    </div>
  )
}