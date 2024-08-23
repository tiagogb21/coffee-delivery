import coffee from "../../../assets/imgs/coffee.png";
import cartFill from "../../../assets/icons/shopping-cart-fill.png";
import timerFill from "../../../assets/icons/timer-fill.png";
import packageFill from "../../../assets/icons/package-fill.png";
import coffeeFill from "../../../assets/icons/coffee-fill.png";

interface ListInfo {
    id: number;
    img: string;
    text: string;
    color: string;
}

const listInfo: ListInfo[] = [
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

const ListInfo = () => {
    return (
        <ul className="grid grid-cols-2 gap-5 text-sm text-base-text">
            {listInfo.map(({ id, img, text, color }) => (
                <li key={id} className="flex items-center gap-3">
                  <span className={`flex justify-center items-center p-2 rounded-full ${color}`}>
                    <img src={img} alt="cart fill" className="w-4 h-auto" style={{ filter: 'invert(100%) brightness(200%)' }} />
                  </span>
                    {text}
                </li>
            ))}
        </ul>
    );
};

export const TopContent = () => {
    return (
        <div className="flex flex-col my-14 lg:flex-row">
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <h1 className="font-baloo2 font-bold text-5xl">
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <h2 className="text-base-subtitle text-xl">
                        Com o Coffee Delivery você recebe seu café onde estiver,
                        a qualquer hora
                    </h2>
                </div>
                <ListInfo />
            </div>
            <img
                className="w-[25rem] h-auto"
                src={coffee}
                alt="cup of coffee"
            />
        </div>
    );
};
