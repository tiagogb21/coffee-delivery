import { Product, ProductProp } from "../Product";

interface ShelfProp {
    title: string;
    items: ProductProp[];
}

export const Shelf = ({ title, items }: ShelfProp) => {
    return (
        <section>
            <h2 className="font-baloo2 font-bold text-base-subtitle mb-14 text-xl">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {items.map((item) => (
                    <Product key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};
