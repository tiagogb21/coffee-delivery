import { ICoffee } from "../../interfaces/ICoffee";

export enum ActionTypes {
    ADD_ITEM = "ADD_NEW_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    CLEAR_CART = "CLEAR_CART",
    INCREASE_QUANTITY = "INCREASE_QUANTITY",
    DECREASE_QUANTITY = "DECREASE_QUANTITY",
}

export function addToCart(product: ICoffee, quantity: number) {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            product,
            quantity,
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

export function increaseQuantity(id: string) {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: {
            id,
        },
    };
}

export function decreaseQuantity(id: string) {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
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
