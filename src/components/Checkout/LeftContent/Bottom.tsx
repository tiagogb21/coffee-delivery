import { Control, Controller, FieldErrors } from "react-hook-form";

import dollarSign from "../../../assets/icons/dollar-sign.svg";
import { AddressSchema } from "../../../schemas/addresSchema";
import { cardMethods } from "../../../utils/constants/cardMethods";

interface BottomProps {
    control: Control<AddressSchema>;
    errors: FieldErrors<AddressSchema>;
}

export const Bottom = ({ control, errors } : BottomProps) => {
    return (
        <div className="p-10 flex flex-col bg-base-card rounded-md gap-4">
            <div className="flex items-start gap-2">
                <img className="mt-1" src={dollarSign} alt="" />
                <div className="flex items-start flex-col">
                    <h3 className="text-lg font-medium text-base-subtitle">Pagamento</h3>
                    <h4 className="text-sm text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</h4>
                </div>
            </div>
            <p className="text-sm text-red-500">{errors.paymentMethod?.message}</p>
            <div className="flex flex-col lg:flex-row justify-between gap-3">
                {cardMethods.map(({ id, icon, label }) => (
                    <div key={id} className="">
                        <Controller
                            control={control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <>
                                    <input
                                        id={id}
                                        type="radio"
                                        {...field}
                                        value={id}
                                        className="peer sr-only"
                                    />
                                    <label
                                        htmlFor={id}
                                        className="flex items-center p-4 rounded-md gap-3 bg-base-button uppercase text-xs text-base-text border border-solid border-base-button hover:text-purple cursor-pointer peer-checked:border-purple peer-checked:text-purple"
                                    >
                                        <img src={icon} alt={label} />
                                        {label}
                                    </label>
                                </>
                            )}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
