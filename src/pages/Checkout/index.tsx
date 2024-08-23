import { Bottom } from "../../components/Checkout/LeftContent/Bottom";
import { Top } from "../../components/Checkout/LeftContent/Top";
import { RightContent } from "../../components/Checkout/RightContent";

export const Checkout = () => {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto flex flex-col justify-between px-20 py-8">
                <h1></h1>
                <form action="" className="flex gap-8">
                    <div>
                        <h2 className="text-lg font-bold font-baloo2 mb-5">Complete seu pedido</h2>
                        <div className="flex flex-col gap-3">
                            <Top />
                            <Bottom />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-lg font-bold font-baloo2 mb-5">Cafés selecionados</h2>
                        <RightContent />
                    </div>
                </form>
            </div>
        </main>
    );
};
