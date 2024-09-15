export function totalPrice(cartRuneList) {
    if (cartRuneList.length === 0) {
        return;
    }

    let totalPrice = null;

    cartRuneList.forEach(rune => {
        if (!totalPrice) {
            totalPrice = rune.runePrice;
        } else {
            totalPrice += rune.runePrice;
        }
    });

    const container = document.createElement("div");
    container.classList.add("price-container");
    container.append("Total", `$ ${totalPrice}`);
    document.body.prepend(container);
}
