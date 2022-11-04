const frm = document.querySelector("form")
const res1 = document.querySelector("#outNameP")
const res2 = document.querySelector("#outPromo")

frm.addEventListener("submit", (e) =>{
    const nome = frm.inNameP.value
    const preco = Number(frm.inPrecoP.value)

    const precop = (preco/2)
    const preco3p = (precop+(2*preco))

    res1.innerText = `${nome} - Promocao: Leve 3 por R$ ${preco3p},00`
    res2.innerText = `O terceiro produto custa apenas R$ ${precop},00`
    e.preventDefault()
})