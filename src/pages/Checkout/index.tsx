import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from 'react-helmet-async';

import { Bottom } from "../../components/Checkout/LeftContent/Bottom";
import { Top } from "../../components/Checkout/LeftContent/Top";
import { RightContent } from "../../components/Checkout/RightContent";
import { AddressSchema, addressSchema } from "../../schemas/addresSchema";

export const Checkout = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addressSchema),
    });

    const onSubmit: SubmitHandler<AddressSchema> = (data) => {
        console.log(data);
    };

    return (
        <main className="min-h-screen">
            <Helmet>
                <title>Checkout | Coffee Delivery</title>
                <meta name="description" content="Coffee delivery checkout" />
                <meta name="keywords" content="coffee, delivery, checkout" />
                <meta name="robots" content="checkout" />
            </Helmet>
            <div className="container mx-auto flex flex-col justify-between px-4 lg:px-20 py-8">
                <h1></h1>
                <form className="flex flex-col lg:flex-row gap-8" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2 className="text-lg font-bold font-baloo2 mb-5">
                            Complete seu pedido
                        </h2>
                        <div className="flex flex-col gap-3">
                            <Top register={register} errors={errors} />
                            <Bottom control={control} errors={errors} />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-lg font-bold font-baloo2 mb-5">
                            Cafés selecionados
                        </h2>
                        <RightContent />
                    </div>
                </form>
            </div>
        </main>
    );
};
