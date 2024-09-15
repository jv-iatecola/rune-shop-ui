export function cartProducts(cartRuneList){  
    cartRuneList.forEach(rune => {
        const container = document.createElement("div")
        container.classList.add("cart-container")

        const runeImage = document.createElement("img")
        runeImage.width = "50"
        runeImage.src = rune.runeImage

        const runeName = document.createElement("p")
        runeName.textContent = rune.runeName

        const runePrice = document.createElement("p")
        runePrice.textContent = `$ ${rune.runePrice}`
        
        const runeInfoDivElement = document.createElement("div")
        runeInfoDivElement.append(runeName, runePrice)

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"

        container.append(runeImage, runeInfoDivElement, removeButton)
        document.body.prepend(container)
    })
}