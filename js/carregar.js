const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

const dados = tarefas.filter(t => t.status < 100)
dados.forEach( tarefa => card(tarefa) )


function card(tarefa){

    const content = `
        <div class="nes-container with-title is-centered">
                <p class="title">${tarefa.titulo}</p>
                <p>${tarefa.descricao}</p>
                <a href="#" class="nes-badge is-icon">
                    <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
                    <span class="is-success">${tarefa.pontos}</span>
                </a> 
                <progress class="nes-progress is-pattern" value="${tarefa.status}" max="100"></progress>

                <button type="button" class="nes-btn is-primary">-</button>
                <button onclick="apagar('${tarefa.id}')" type="button" class="nes-btn is-error">Apagar</button>
                <button onclick="inc('${tarefa.id}')" type="button" class="nes-btn is-primary">+</button>
            </div>
        `

        const card = document.createElement("div")
        card.id = tarefa.id
        card.innerHTML = content

    document
        .querySelector("#listaDeTarefas")
        .appendChild(card);
}