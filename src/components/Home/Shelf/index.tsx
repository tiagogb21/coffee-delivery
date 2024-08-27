import { ICoffee } from "../../../interfaces/ICoffee";
import { Product, ProductProp } from "../Product";

interface ShelfProps {
    items: ICoffee[];
}

export const Shelf = ({ items }: ShelfProps) => {
    return (
        <section>
            <h2 className="font-baloo2 font-bold text-base-subtitle mb-14 text-xl">
                Nossos cafés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {items?.map((item: ProductProp) => (
                    <Product key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};
