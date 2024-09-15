export function productCard(productCardProps){
    const container = document.createElement("div")

    const runeNameElement = document.createElement("p")
    runeNameElement.textContent = productCardProps.name

    const runeImageElement = document.createElement("img")
    runeImageElement.width = "500"
    runeImageElement.src = productCardProps.image

    const runePriceElement = document.createElement("p")
    runePriceElement.textContent = productCardProps.price

    container.append(runeNameElement, runeImageElement, runePriceElement)
    document.body.prepend(container)
}