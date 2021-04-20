const criarTarefa = () => {
    const tarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dia-semana")
    
    if (tarefa.value === "") {
        alert("Campo vazio")
    }

    if (diaSemana.value === "domingo" && tarefa.value !== "") {
        const semana = document.getElementById("domingo")
        semana.innerHTML += `<li id="tarefaDomingo "onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }
    if (diaSemana.value === "segunda" && tarefa.value !== "") {
        const semana = document.getElementById("segunda")
        semana.innerHTML += `<li onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }
    if (diaSemana.value === "terca" && tarefa.value !== "") {
        const semana = document.getElementById("terca")
        semana.innerHTML += `<li onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }
    if (diaSemana.value === "quarta" && tarefa.value !== "") {
        const semana = document.getElementById("quarta")
        semana.innerHTML += `<li onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }
    if (diaSemana.value === "quinta" && tarefa.value !== "") {
        const semana = document.getElementById("quinta")
        semana.innerHTML += `<li onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }
    if (diaSemana.value === "sexta" && tarefa.value !== "") {
        const semana = document.getElementById("sexta")
        semana.innerHTML += `<li onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }
    if (diaSemana.value === "sabado" && tarefa.value !== "") {
        const semana = document.getElementById("sabado")
        semana.innerHTML += `<li onclick=style="text-decoration:line-through;">${tarefa.value}</li>`
    }

    tarefa.value = ""

}

