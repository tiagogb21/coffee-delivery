import { Helmet } from "react-helmet-async";
import { Shelf } from "../../components/Home/Shelf";
import { TopContent } from "../../components/Home/TopContent";
import { categories } from "../../utils/constants/categories";

export const Home = () => {
    return (
        <main className="min-h-screen">
            <Helmet>
                <title>Home | Coffee Delivery</title>
                <meta name="description" content="Coffee Delivery home" />
                <meta name="keywords" content="coffee, delivery" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div className="flex flex-col container mx-auto justify-between px-4 lg:px-20 py-8 gap-8">
                <TopContent />
                <Shelf items={categories} />
            </div>
        </main>
    );
};
