import cartFill from "../../assets/icons/shopping-cart-fill.png";
import timerFill from "../../assets/icons/timer-fill.png";
import packageFill from "../../assets/icons/package-fill.png";
import coffeeFill from "../../assets/icons/coffee-fill.png";
import { IListInfo } from "../../interfaces/IListInfo";

export const listInfo: IListInfo[] = [
    {
        id: 1,
        img: cartFill,
        text: "Compra simples e segura",
        color: 'bg-yellow-dark',
    },
    {
        id: 2,
        img: packageFill,
        text: "Embalagem mantém o café intacto",
        color: 'bg-yellow',
    },
    {
        id: 3,
        img: timerFill,
        text: "Entrega rápida e rastreada",
        color: 'bg-base-text',
    },
    {
        id: 4,
        img: coffeeFill,
        text: "O café chega fresquinho até você",
        color: 'bg-purple',
    },
];