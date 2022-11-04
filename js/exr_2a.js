const frm = document.querySelector("form")
const resp1 = document.querySelector("#outRemd")
const resp2 = document.querySelector("#outPromo")

frm.addEventListener("submit", (e) =>{
    const nome = frm.inRemedio.value
    const valor = Number(frm.inPreco.value)

    const entrada = Math.floor(valor)
    const promo2 = entrada*2
    
    resp1.innerText = `Promocao de ${nome}`
    resp2.innerText = `Leve 2 por apenas R$: ${promo2.toFixed()}`
    e.preventDefault()
})