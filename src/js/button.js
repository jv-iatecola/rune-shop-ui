export function buyButton(cartRuneList){
    const buyButtonElement = document.createElement("button")
    buyButtonElement.textContent = "Buy"

    const buttonContainerElement = document.createElement("div")
    buttonContainerElement.classList.add("button-container")
    buttonContainerElement.append(buyButtonElement)


    buyButtonElement.onclick = () => {
        cartRuneList.clear()
        location.reload()
    }

    document.body.prepend(buttonContainerElement)
}