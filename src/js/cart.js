import { header } from "./header";
import { cartProducts } from "./cart-products";
import { totalPrice } from "./total-price";
import { buyButton } from "./button";


const cartRuneList = [
    {
        runeImage: "https://cdn.discordapp.com/attachments/863410455291494440/1284657599647715429/Naramon_Rune.png?ex=66eab9df&is=66e9685f&hm=f8fc8583625ef692d35fb8f7acc4e8165cdd64702324aad6842a48ceb34c412b&",
        runeName: "Naramon Rune",
        runePrice: 49.99
    },
    {
        runeImage: "https://cdn.discordapp.com/attachments/863410455291494440/1284657599387795516/Madurai_Rune.png?ex=66eab9df&is=66e9685f&hm=8e40a9833c770367dd68bc41b5ac192effe7fb979ed2297f082785b4ae31d018&",
        runeName: "Madurai Rune",
        runePrice: 39.99
    },
    {
        runeImage: "https://media.discordapp.net/attachments/863410455291494440/1284657599878529105/Unairu_Rune.png?ex=66eab9df&is=66e9685f&hm=db1d37afb0ac52305d0bfc38bfb7cd0dd7abf9cf0c20dbb7b9a1314541906754&=&format=webp&quality=lossless",
        runeName: "Unairu Rune",
        runePrice: 29.99
    }
]
buyButton(cartRuneList)

totalPrice(cartRuneList)

cartProducts(cartRuneList)

header()