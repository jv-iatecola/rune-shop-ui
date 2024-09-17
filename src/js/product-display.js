export function productDisplay(productsList){
    if (productsList.length === 0){
        const pEmptyArrayElement = document.createElement("p")
        pEmptyArrayElement.textContent = "No items found for your search."
        document.body.prepend(pEmptyArrayElement)
        return;
    }

    productsList.forEach(product => {
        const productContainerElement = document.createElement("div")
        productContainerElement.classList.add("product-container")

        const runeNameElement = document.createElement("p")
        runeNameElement.textContent = product.runeName
        
        const runeImageElement = document.createElement("img")
        runeImageElement.width = "50"
        runeImageElement.src = product.runeImage

        const runePriceElement = document.createElement("p")
        runePriceElement.textContent = `$ ${product.runePrice}`
        
        productContainerElement.append(runeNameElement, runeImageElement, runePriceElement)

        const productButtonElement = document.createElement("button")
        // productButtonElement.classList.add("product-buttom")
        productButtonElement.append(runeNameElement, runeImageElement, runePriceElement)
        productContainerElement.append(productButtonElement)

        document.body.prepend(productContainerElement)
    });
}