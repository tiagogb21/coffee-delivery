import { FieldErrors, UseFormRegister } from "react-hook-form";
import pinMap from "../../../assets/icons/pin-map.svg";
import InputForm from "./InputForm";
import { AddressSchema } from "../../../schemas/addresSchema";

interface TopProps {
    register: UseFormRegister<AddressSchema>;
    errors: FieldErrors<AddressSchema>;
}

export const Top = ({ register, errors } : TopProps) => {
    return (
        <div className="p-10 bg-base-card rounded-md flex flex-col gap-8">
            <div className="flex items-start gap-2">
                <img className="mt-1" src={pinMap} alt="" />
                <div className="flex items-start flex-col">
                    <h3 className="text-base font-medium text-base-subtitle">
                        Endereço de Entrega
                    </h3>
                    <h4 className="text-sm text-base-text">
                        Informe o endereço de entrega
                    </h4>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <InputForm placeholder="CEP" width="medium" inputName="cep" register={register} errors={errors} />
                <InputForm placeholder="Rua" inputName="street" register={register} errors={errors} />
                <div className="flex gap-4">
                    <InputForm placeholder="Número" width="small" inputName="number" register={register} errors={errors} />
                    <InputForm placeholder="Complemento" inputName="complement" register={register} errors={errors} />
                </div>
                <div className="flex gap-4">
                    <InputForm placeholder="Bairro" inputName="neighborhood" register={register} errors={errors} />
                    <InputForm placeholder="Cidade" inputName="city" register={register} errors={errors} />
                    <InputForm placeholder="UF" width="small" inputName="state" register={register} errors={errors} />
                </div>
            </div>
        </div>
    );
};
