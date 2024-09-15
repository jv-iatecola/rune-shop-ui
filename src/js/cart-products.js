export function cartProducts(cartRuneList){  
    if (cartRuneList.length === 0){
        const pEmptyCartElement = document.createElement("p")
        pEmptyCartElement.textContent = "Your cart is empty."
        pEmptyCartElement.classList.add("empty-cart")
        document.body.prepend(pEmptyCartElement)
        return;
    }

    cartRuneList.forEach(rune => {
        const cartContainerElement = document.createElement("div")
        cartContainerElement.classList.add("cart-container")

        const runeImageElement = document.createElement("img")
        runeImageElement.width = "50"
        runeImageElement.src = rune.runeImage

        const runeNameElement = document.createElement("p")
        runeNameElement.textContent = rune.runeName

        const runePriceElement = document.createElement("p")
        runePriceElement.textContent = `$ ${rune.runePrice}`
        
        const runeInfoDivElement = document.createElement("div")
        runeInfoDivElement.append(runeNameElement, runePriceElement)

        const removeButtonElement = document.createElement("button")
        removeButtonElement.textContent = "Remove"

        cartContainerElement.append(runeImageElement, runeInfoDivElement, removeButtonElement)
        document.body.prepend(cartContainerElement)
    })
}