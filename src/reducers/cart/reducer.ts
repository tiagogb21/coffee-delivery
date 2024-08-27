import { produce } from "immer";
import { ActionTypes } from "./actions";
import { ICoffee } from "../../interfaces/ICoffee";
import { parsePrice } from "../../utils/functions/parsePrice";

export interface CartItem {
    product: ICoffee;
    quantity: number;
}

export interface CartState {
    cart: CartItem[];
    totalAmount: number;
}

export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.INCREASE_QUANTITY:
            return produce(state, (draft) => {
                const existingProductIndex = draft.cart.findIndex(
                    (coffee) => {
                        return coffee.product.id === Number(action.payload.id)
                });

                if(existingProductIndex !== -1) {
                    draft.cart[existingProductIndex].quantity += 1;
                }
            });
        case ActionTypes.DECREASE_QUANTITY:
            return produce(state, (draft) => {
                const existingProductIndex = draft.cart.findIndex(
                    (coffee) => coffee.product.id === Number(action.payload.id)
                );

                if (existingProductIndex !== -1 && draft.cart[existingProductIndex].quantity > 1) {
                    draft.cart[existingProductIndex].quantity -= 1;
                }
            });
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const existingProductIndex = draft.cart.findIndex(
                    (coffee) => {
                        return coffee.product.id === Number(action.payload.product.id)
                    }
                );

                const parsedPrice = parsePrice(action.payload.product.price);

                if (existingProductIndex !== -1) {
                    draft.cart[existingProductIndex].quantity += action.payload.quantity;
                } else {
                    draft.cart.push({
                        product: action.payload.product,
                        quantity: action.payload.quantity,
                    });
                }

                draft.totalAmount = parseFloat(
                    (draft.totalAmount + parsedPrice).toFixed(2)
                );
            });

        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                const index = draft.cart.findIndex(
                    (coffee) => coffee.product.id === Number(action.payload.id)
                );
                if (index !== -1) {
                    draft.totalAmount -= Number(
                        draft.cart[index].product.price
                    );
                    draft.cart.splice(index, 1);
                }
            });

        case ActionTypes.CLEAR_CART:
            return produce(state, (draft) => {
                draft.cart = [];
                draft.totalAmount = 0;
            });

        default:
            return state;
    }
}
