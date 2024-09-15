export function totalPrice(cartRuneList){
    let totalPrice = null

    cartRuneList.forEach(rune => {
        if (!totalPrice){
            totalPrice = rune.runePrice
        }else{
            totalPrice = totalPrice + rune.runePrice
        }
    });
    const container = document.createElement("div")
    container.classList.add("price-container")
    container.append("Total", `$ ${totalPrice}`)
    document.body.prepend(container)
}