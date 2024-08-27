import { ButtonControl } from "../ButtonControl";

export interface ProductProp {
    id: number;
    img: string;
    tags: string[];
    title: string;
    description: string;
    price: string;
}

export const Product = (props: ProductProp) => {
    const {
        tags,
        img,
        title,
        description,
        price,
    } = props;
    return (
        <article className="text-base-label flex flex-col justify-between items-center bg-base-card p-5 gap-4 rounded-custom">
            <img src={img} alt="" className="-mt-11" />

            <div className="flex items-center justify-center gap-4">
                {tags.map((tag, index) => (
                    <p
                        key={index}
                        className="rounded-3xl bg-yellow-light text-yellow-dark px-3 py-1 uppercase text-[0.625rem]"
                    >
                        {tag}
                    </p>
                ))}
            </div>
            <h3 className="font-baloo2 text-xl font-bold text-base-subtitle">
                {title}
            </h3>
            <p className="text-sm">{description}</p>
            <div className="w-full items-center flex justify-between px-3">
                <p className="flex items-center gap-1">
                    R$
                    <span className="font-baloo2 font-bold text-2xl">
                        {price}
                    </span>
                </p>
                <ButtonControl {...props} />
            </div>
        </article>
    );
};
