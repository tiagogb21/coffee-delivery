import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/cart";
import emptyCart from "../../../assets/icons/empty-cart.svg";
import { Link } from "react-router-dom";
import minus from "../../../assets/icons/minus-bold.png";
import plus from "../../../assets/icons/plus-bold.png";
import garbage from "../../../assets/icons/garbage.svg";

const DELIVERY_TAX = 3.5;

export const RightContent = () => {
    const { cart } = useContext(ShoppingCartContext);

    const { increaseQuantityItem, decreaseQuantityItem, removeItemFromCart } =
        useContext(ShoppingCartContext);

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

    if (cart.length === 0) {
        return (
            <div className="flex flex-col gap-4">
                <h3 className="text-center">
                    Ainda não há produtos no carrinho
                </h3>
                <img src={emptyCart} className="w-72 h-auto" alt="" />
                <Link
                    to="/"
                    type="submit"
                    className="w-full uppercase font-bold rounded-md hover:bg-yellow-dark transition-all bg-yellow py-3 text-white text-center"
                >
                    escolher café
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 bg-base-card p-10 lg:w-[28rem] rounded-md">
            <div className="flex flex-col">
                {cart.map(({ product, quantity }) => (
                    <div key={product.id}>
                        <div className="flex gap-5">
                            <img
                                src={product.img}
                                alt=""
                                className="w-16 h-auto"
                            />
                            <div className="flex flex-col justify-between">
                                <h3>{product.title}</h3>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-md flex bg-base-button items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                decreaseQuantityItem(
                                                    String(product.id)
                                                )
                                            }
                                        >
                                            <img
                                                className="w-4 h-auto text-purple"
                                                src={minus}
                                                alt=""
                                            />
                                        </button>
                                        {quantity}
                                        <button
                                            type="button"
                                            className=""
                                            onClick={() =>
                                                increaseQuantityItem(
                                                    String(product.id)
                                                )
                                            }
                                        >
                                            <img
                                                className="w-4 h-auto text-purple"
                                                src={plus}
                                                alt=""
                                            />
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeItemFromCart(String(product.id))}
                                        className="p-3 bg-base-button rounded-md flex items-center text-xs gap-1"
                                    >
                                        <img
                                            className="w-4 h-auto text-purple"
                                            src={garbage}
                                            alt=""
                                        />
                                        REMOVER
                                    </button>
                                </div>
                            </div>
                            <p className="font-bold">
                                {formatToReal(parseFloat(product.price))}
                            </p>
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
            <button
                type="submit"
                className="uppercase font-bold rounded-md hover:bg-yellow-dark transition-all bg-yellow py-3 text-white"
            >
                confirmar pedido
            </button>
        </div>
    );
};
