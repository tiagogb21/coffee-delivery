import delivery from "../../assets/imgs/delivery.png";
import mapPin from "../../assets/icons/pin.png";
import clock from "../../assets/icons/clock.png";
import dollar from "../../assets/icons/dollar.png";

const address = {
    street: "Rua João Daniel Martinelli",
    number: 102,
    neighborhood: "Farrapos",
    city: "Porto Alegre",
    state: "RS",
};

const paymentMethod = "Cartão de Crédito";

export const Success = () => {
    return (
        <main className="">
            <div className="flex flex-col container mx-auto justify-between px-20 py-8 gap-8">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="text-3xl font-baloo2 font-bold text-yellow-dark">
                            Uhu! Pedido confirmado
                        </h1>
                        <h2 className="text-base-subtitle text-xl">
                            Agora é só aguardar que logo o café chegará até você
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-24">
                        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-yellow-dark to-purple-dark p-1 rounded-custom">
                            <div className="w-full h-full flex flex-col gap-8 p-10 bg-background rounded-custom">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-purple-dark rounded-full">
                                        <img
                                            src={mapPin}
                                            alt=""
                                            className="fill-white"
                                        />
                                    </div>
                                    <div>
                                        <p>
                                            Entrega em <strong>{address.street}</strong>,{" "}
                                            <strong>{address.number}</strong>
                                        </p>
                                        <p>
                                            {address.neighborhood} -{" "}
                                            {address.city} , {address.state}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-yellow rounded-full">
                                        <img
                                            src={clock}
                                            alt=""
                                            className="fill-white"
                                        />
                                    </div>
                                    <div>
                                        <p>Previsão de entrega</p>
                                        <p className="font-bold">20 min - 30 min</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-dark rounded-full">
                                        <img
                                            src={dollar}
                                            alt=""
                                            className="fill-white"
                                        />
                                    </div>
                                    <div>
                                        <p>Pagamento na entrega</p>
                                        <p className="font-bold">{paymentMethod}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={delivery} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};
