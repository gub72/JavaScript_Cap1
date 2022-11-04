//cria referencia ao form e aos elementos H3 e H4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) =>{
    const titulo = frm.inTitulo.value //obtem coteudo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao/60) //arredonda para baixo do resultado
    const minutos = duracao % 60 //obtem o resto da divisao

    resp1.innerText = titulo //exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()
})