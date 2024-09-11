export function productCard(productCardProps){
    const container = document.createElement("div")

    const runeName = document.createElement("p")
    runeName.textContent = productCardProps.name

    const runeImage = document.createElement("img")
    runeImage.width = "500"
    runeImage.src = productCardProps.image

    const runePrice = document.createElement("p")
    runePrice.textContent = productCardProps.price

    container.append(runeName, runeImage, runePrice)
    document.body.prepend(container)
}