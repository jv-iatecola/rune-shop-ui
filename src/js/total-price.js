export function totalPrice(cartRuneList){
    let totalPrice = 0
    const priceContainer = document.createElement("div")
    priceContainer.classList.add("price-container")

    if (cartRuneList.length > 0){
        cartRuneList.forEach(rune => {
            if (!totalPrice){
                totalPrice = rune.runePrice
            }else{
                totalPrice += rune.runePrice
            }
        });
        priceContainer.append(`Total: $ ${totalPrice}`)
        document.body.prepend(priceContainer)
    }
}