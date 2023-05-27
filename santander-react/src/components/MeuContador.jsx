import { useState } from 'react'

export default function MeuContador() {

  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  return (
    <div>
      <h1>Meu Contador: {contador}</h1>
      <button onClick={aumentar}>Aumentar</button>
    </div>
  )
}