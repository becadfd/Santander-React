import { useEffect, useState } from "react"

export default function Dados() {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {

        async function buscarDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resFinal = await resultado.json()
            return resFinal
        }

        buscarDados().then(res => setTarefas(res))

    }, [])

    return (
        <div>
            <ol>
                {tarefas.map((tarefa) => {
                    return (
                        <li key={tarefa.id}>{tarefa.title}
                            {tarefa.completed ? ' - Tarefa Concluída' : null}
                        </li>

                    )
                })}
            </ol>
        </div>
    )
}