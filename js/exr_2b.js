const frm = document.querySelector("form")
const res = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const valor = Number(frm.inUsotempo.value)
    const temp = Number(frm.inTempo.value)

    const qTemp = temp/15
    const resp = Math.ceil(qTemp)
    const fim = resp*valor
    res.innerText = `Valor a pagar R$: ${fim},00`
    e.preventDefault()
})