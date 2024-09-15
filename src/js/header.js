export function header(){
    const container = document.createElement("form")
    container.classList.add("header-container")

    const runeShopImageElement = document.createElement("img")
    runeShopImageElement.src = "https://cdn.discordapp.com/attachments/1181755843050479687/1282852805102538885/soda.png?ex=66e18606&is=66e03486&hm=a5bb15e82b7587d3514a720931d85fed05881880363e2a5e8979e89a07f6d3cc&"
    runeShopImageElement.width = "50"
    runeShopImageElement.alt = "Rune Shop logo image."

    const runeShopButtonElement= document.createElement("button")
    runeShopButtonElement.append(runeShopImageElement)
    runeShopButtonElement.classList.add("runeShopButton")

    const searchIconElement = document.createElement("span")
    searchIconElement.classList.add("search-icon")
    searchIconElement.classList.add("material-symbols-outlined")
    searchIconElement.textContent = "search"

    const searchBarInputElement = document.createElement("input")
    searchBarInputElement.classList.add("search-input")
    searchBarInputElement.placeholder = "Search"
    searchBarInputElement.type = "search"

    const centralDivElement = document.createElement("div")
    centralDivElement.classList.add("centralDiv")
    centralDivElement.append(searchBarInputElement, searchIconElement)

    const cartIconElement = document.createElement("span")
    cartIconElement.classList.add("cart-icon")
    cartIconElement.classList.add("material-symbols-outlined")
    cartIconElement.textContent = "shopping_cart"

    const cartButtonElement = document.createElement("button")
    cartButtonElement.classList.add("cartButton")
    cartButtonElement.append(cartIconElement)

    const menuIconElement = document.createElement("span")
    menuIconElement.classList.add("menu-icon")
    menuIconElement.classList.add("material-symbols-outlined")
    menuIconElement.textContent = "menu"

    const rightDivElement = document.createElement("div")
    rightDivElement.classList.add("rightDiv")
    rightDivElement.append(cartButtonElement, menuIconElement)
    
    container.append(runeShopButtonElement, centralDivElement, rightDivElement)
    document.body.prepend(container)
}