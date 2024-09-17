import { productDisplay } from "./product-display";
import { productCard } from "./product-card";
import { header } from "./header";

const productCardProps = {
    name: "Naramon Rune",
    image: "https://media.discordapp.net/attachments/1181755843050479687/1278743799375466507/FB_IMG_1724946593595.jpg?ex=66e06af7&is=66df1977&hm=cd480ee709f8bed71f80bc8809e9e4d1cd766daaf95d9ae73d8d7e1df4ca5a19&=&format=webp&width=548&height=676",
    price: "$ 49.90"
}

const productList = [
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

productDisplay(productList)

header()