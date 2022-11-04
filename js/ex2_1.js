//cria referencia ao form e ao elemento h3(onde sera exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
//cria um "ouvinte" de evento, acionado com o botão submit for clicado 
frm.addEventListener("submit", (e) => { 
    const nome1 = frm.inNome.value //obtem o nome digitado no form
    resp.innerText = `Ola ${nome1}` //exibe a resposta do programa
    e.preventDefault() //evita de que o submit"botao" atualize a pagina
})
