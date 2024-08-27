import { ICardMethods } from "../../interfaces/ICardMethods";

import creditCard from "../../assets/icons/credit-card.svg";
import bank from "../../assets/icons/bank.svg";
import money from "../../assets/icons/money.svg";

export const cardMethods: ICardMethods[] = [
    {
        id: "credit-card",
        icon: creditCard,
        label: "cartão de crédito",
    },
    {
        id: "debit-card",
        icon: bank,
        label: "cartão de débito",
    },
    {
        id: "money",
        icon: money,
        label: "dinheiro",
    },
];