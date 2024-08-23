import { useContext, useState } from "react";
import minus from "../../../assets/icons/minus-bold.png";
import plus from "../../../assets/icons/plus-bold.png";
import shoppingCart from "../../../assets/icons/shopping-cart-fill.png";
import { ShoppingCartContext } from "../../../contexts/cart";
import { ICoffee } from "../../../interfaces/ICoffee";

export const ButtonControl = (props: ICoffee) => {
    const [quantity, setQuantity] = useState<number>(1);

    const { addItemToCart } = useContext(ShoppingCartContext);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-3 bg-base-button p-2">
                <button
                    type="button"
                    className="w-4 h-auto"
                    onClick={handleDecreaseQuantity}
                >
                    <img src={minus} alt="decrease quantity" />
                </button>
                <span className="font-bold">{quantity}</span>
                <button
                    type="button"
                    className="w-4 h-auto"
                    onClick={handleIncreaseQuantity}
                >
                    <img src={plus} alt="increase quantity" />
                </button>
            </div>
            <button type="button" className="bg-purple-dark p-2 rounded-md" onClick={() => addItemToCart(props)}>
                <img
                    src={shoppingCart}
                    alt="shopping cart"
                    className="w-5 h-auto"
                    style={{ filter: "invert(100%) brightness(200%)" }}
                />
            </button>
        </div>
    );
};
