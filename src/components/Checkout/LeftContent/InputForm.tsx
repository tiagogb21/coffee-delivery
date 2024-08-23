import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { AddressSchema } from "../../../schemas/addresSchema";

type AddressField = keyof AddressSchema;

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: "small" | "medium" | "large";
    inputName: AddressField;
    register: UseFormRegister<AddressSchema>;
    errors: FieldErrors<AddressSchema>;
}

const InputForm = ({
    width = "large",
    inputName,
    type = "text",
    placeholder,
    register,
    errors,
}: InputFormProps) => {
    const widthObj = {
        small: "w-1/3",
        medium: "w-1/2",
        large: "w-full",
    };

    return (
        <div className="flex flex-col">
            <input
                type={type}
                placeholder={placeholder}
                className={`p-3 border border-solid border-base-button bg-base-input rounded-md ${widthObj[width]}`}
                {...register(inputName)}
            />
            {errors[inputName] && (
                <p className="text-sm text-red-500">{errors[inputName]?.message}</p>
            )}
        </div>
    );
};

export default InputForm;