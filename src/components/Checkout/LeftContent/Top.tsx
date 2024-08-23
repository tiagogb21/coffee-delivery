import { InputHTMLAttributes } from "react";
import pinMap from "../../../assets/icons/pin-map.svg";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: "small" | "medium" | "large";
}

const InputForm = ({
    width = "large",
    type = "text",
    placeholder,
}: InputFormProps) => {
    const widthObj = {
        small: "w-1/3",
        medium: "w-1/2",
        large: "w-full",
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`p-3 border border-solid border-base-button bg-base-input rounded-md ${widthObj[width]}`}
        />
    );
};

export const Top = () => {
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
                <InputForm placeholder="CEP" width="medium" />
                <InputForm placeholder="Rua" />
                <div className="flex gap-4">
                    <InputForm placeholder="Número" width="small" />
                    <InputForm placeholder="Complemento" />
                </div>
                <div className="flex gap-4">
                    <InputForm placeholder="Bairro" />
                    <InputForm placeholder="Cidade" />
                    <InputForm placeholder="UF" width="small" />
                </div>
            </div>
        </div>
    );
};
