import { header } from "./header";
import { cartProducts } from "./cart_products";
import { totalPrice } from "./total-price";


const cartRuneList = [
    {
        runeImage: "https://cdn.discordapp.com/attachments/863410455291494440/1284657599647715429/Naramon_Rune.png?ex=66e76e1f&is=66e61c9f&hm=921e5ddef70e47cc6eef81cddf94a1a1514ddc8aa0a5ba2d89ba754ca2633e14&",
        runeName: "Naramon Rune",
        runePrice: 29.99
    },
    {
        runeImage: "https://cdn.discordapp.com/attachments/863410455291494440/1284657599387795516/Madurai_Rune.png?ex=66e76e1f&is=66e61c9f&hm=ac1119a61dbc97970bbd9b7f6aca4b60b70ab93d9011d633f12c8b1ee0da65b3&",
        runeName: "Madurai Rune",
        runePrice: 39.99
    },
    {
        runeImage: "https://media.discordapp.net/attachments/863410455291494440/1284657599878529105/Unairu_Rune.png?ex=66e76e1f&is=66e61c9f&hm=62a4387b05ef393fd09c638c5f4061a5f6cd6652cc7a2ad40eb87149391929e9&=&format=webp&quality=lossless",
        runeName: "Unairu Rune",
        runePrice: 49.99
    }
]
totalPrice(cartRuneList)

cartProducts(cartRuneList)

header()