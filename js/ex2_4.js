const frm = document.querySelector("form")//referencia da tag form no arquivo html
const resp = document.querySelector("h3")//variavel que vai receber o valor da saida

frm.addEventListener("submit", (e) =>{
    const quilo = Number(frm.inQuilo.value) //recebendo valor dos quilos
    const cons = Number(frm.inConsumo.value) //recebendo valor do consumo

    const valor = (quilo/1000)*cons //processo de conversao
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`//saida dos dados

    e.preventDefault()//evita envio do form
})
