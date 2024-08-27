import expresso from "../../assets/imgs/expresso.png";
import americano from "../../assets/imgs/americano.png";
import expressoCremoso from "../../assets/imgs/expresso-cremoso.png";
import cafeGelado from "../../assets/imgs/cafe-gelado.png";
import cafeComLeite from "../../assets/imgs/cafe-com-leite.png";
import latte from "../../assets/imgs/latte.png";
import capuccino from "../../assets/imgs/capuccino.png";
import macchiato from "../../assets/imgs/macchiato.png";
import cubano from "../../assets/imgs/cubano.png";
import irlandes from "../../assets/imgs/irlandes.png";
import moccacino from "../../assets/imgs/moccacino.png";
import havaiano from "../../assets/imgs/havaiano.png";
import arabe from "../../assets/imgs/arabe.png";
import { ICoffee } from "../../interfaces/ICoffee";

export const categories: ICoffee[] = [
    {
        id: 1,
        img: expresso,
        tags: ["tradicional"],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: "9,90",
    },
    {
        id: 2,
        img: americano,
        tags: ["tradicional"],
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: "9,90",
    },
    {
        id: 3,
        img: expressoCremoso,
        tags: ["tradicional"],
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: "9,90",
    },
    {
        id: 4,
        img: cafeGelado,
        tags: ["tradicional", "gelado"],
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: "9,90",
    },
    {
        id: 5,
        img: cafeComLeite,
        tags: ["tradicional", "com leite"],
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: "9,90",
    },
    {
        id: 6,
        img: latte,
        tags: ["tradicional", "com leite"],
        title: "Latte",
        description:
            "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: "9,90",
    },
    {
        id: 7,
        img: capuccino,
        tags: ["tradicional", "com leite"],
        title: "Capuccino",
        description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: "9,90",
    },
    {
        id: 8,
        img: macchiato,
        tags: ["tradicional", "gelado"],
        title: "Macchiato",
        description:
            "Café expresso misturado com um pouco de leite quente e espuma",
        price: "9,90",
    },
    {
        id: 9,
        img: moccacino,
        tags: ["tradicional", "com leite"],
        title: "Moccacino",
        description:
            "Café expresso com calda de chocolate, pouco leite e espuma",
        price: "9,90",
    },
    {
        id: 10,
        img: expresso,
        tags: ["tradicional", "com leite"],
        title: "Chocolate Quente",
        description:
            "Bebida feita com chocolate dissolvido no leite quente e café",
        price: "9,90",
    },
    {
        id: 11,
        img: cubano,
        tags: ["especial", "alcoólico", "gelado"],
        title: "Cubano",
        description:
            "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: "9,90",
    },
    {
        id: 12,
        img: havaiano,
        tags: ["especial"],
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: "9,90",
    },
    {
        id: 13,
        img: arabe,
        tags: ["tradicional"],
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: "9,90",
    },
    {
        id: 14,
        img: irlandes,
        tags: ["especial", "alcoólico"],
        title: "Irlandês",
        description:
            "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: "9,90",
    },
];
