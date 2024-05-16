function inc(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefa = tarefas.find(t => t.id == id)
    tarefa.status += 10
    if (tarefa.status > 100) tarefa.status = 100
    
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    document.querySelector(`#${id} progress`).value = tarefa.status
    if (tarefa.status > 50){
        document.querySelector(`#${id} progress`).classList.add("is-danger")

    }
}