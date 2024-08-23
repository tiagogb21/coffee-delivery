import { ICoffee } from "../../interfaces/ICoffee";

export enum ActionTypes {
    ADD_ITEM = "ADD_NEW_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    CLEAR_CART = "CLEAR_CART",
}

export function addToCart(product: ICoffee) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            product,
        },
    };
}

export function removeFromCart(id: string) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            id,
        },
    };
}

export function clearCart() {
    return {
        type: ActionTypes.CLEAR_CART,
    };
}
