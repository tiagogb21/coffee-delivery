import { Shelf } from "../../components/Home/Shelf";
import { TopContent } from "../../components/Home/TopContent";
import { categories } from "../../utils/constants/categories";

export const Home = () => {
    return (
        <main className="min-h-screen">
            <div className="flex flex-col container mx-auto justify-between px-20 py-8 gap-8">
                <TopContent />
                {categories.map(({ title, items }) => (
                    <Shelf title={title} items={items} />
                ))}
            </div>
        </main>
    );
};
