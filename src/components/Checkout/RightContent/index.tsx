import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/cart";

const DELIVERY_TAX = 3.5;

export const RightContent = () => {
    const { cart } = useContext(ShoppingCartContext);

    const finalPrice = cart.reduce((acc, curr) => {
        acc += parseFloat(curr.product.price) * curr.quantity;
        return acc;
    }, 0);

    const formatToReal = (num: number) => {
        return num.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    return (
        <div className="flex flex-col gap-6 bg-base-card p-10 lg:w-[28rem] rounded-md">
            <div className="flex flex-col">
                {cart.map(({ product, quantity }) => (
                    <div key={product.id}>
                        <div className="flex gap-5">
                            <img src={product.img} alt="" className="w-16 h-auto" />
                            <div className="flex flex-col justify-between">
                                <h3>{product.title}</h3>
                                <div className="flex">
                                    <button>{quantity}</button>
                                    <button>REMOVER</button>
                                </div>
                            </div>
                            <p>{formatToReal(parseFloat(product.price))}</p>
                        </div>
                        <hr className="my-6" />
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <p>Total de itens</p>
                    <p>{formatToReal(finalPrice)}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Entrega</p>
                    <p>{formatToReal(DELIVERY_TAX)}</p>
                </div>
                <div className="text-xl font-bold text-base-subtitle flex items-center justify-between">
                    <p>Total</p>
                    <p>{formatToReal(finalPrice + DELIVERY_TAX)}</p>
                </div>
            </div>
            <button type="submit" className="uppercase font-bold rounded-md hover:bg-yellow-dark transition-all bg-yellow py-3 text-white">confirmar pedido</button>
        </div>
    );
};
