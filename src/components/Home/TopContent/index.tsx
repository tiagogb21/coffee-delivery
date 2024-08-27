import coffee from "../../../assets/imgs/coffee.png";
import { listInfo } from "../../../utils/constants/listInfo";

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
        <div className="flex flex-col my-14 lg:flex-row items-center gap-10">
            <div className="flex flex-col justify-between gap-10">
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
