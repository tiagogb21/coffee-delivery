import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ICoffee } from "../interfaces/ICoffee";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../reducers/cart/actions";
import { cartReducer, CartItem } from "../reducers/cart/reducer";

interface CyclesContextType {
    cart: CartItem[];
    totalAmount: number;
    increaseQuantityItem: (id: string) => void;
    decreaseQuantityItem: (id: string) => void;
    addItemToCart: (data: ICoffee, quantity: number) => void;
    removeItemFromCart: (id: string) => void;
    clearCartItems: () => void;
}

export const ShoppingCartContext = createContext({} as CyclesContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export const ShoppingCartProvider = ({ children }: CartContextProviderProps) => {
    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: [],
            cartId: null,
            totalAmount: 0,
        },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return initialState;
        }
    );

    const { cart, totalAmount } = cartState;

    function increaseQuantityItem(id: string) {
        dispatch(increaseQuantity(id));
    }

    function decreaseQuantityItem(id: string) {
        dispatch(decreaseQuantity(id));
    }

    function addItemToCart(data: ICoffee, quantity: number) {
        dispatch(addToCart(data, quantity));
    }

    function removeItemFromCart(id: string) {
        dispatch(removeFromCart(id));
    }

    function clearCartItems() {
        dispatch(clearCart());
    }

    useEffect(() => {
        const stateJSON = JSON.stringify(cartState);
        localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }, [cartState]);

    return (
        <ShoppingCartContext.Provider
            value={{
                cart,
                totalAmount,
                increaseQuantityItem,
                decreaseQuantityItem,
                addItemToCart,
                removeItemFromCart,
                clearCartItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
