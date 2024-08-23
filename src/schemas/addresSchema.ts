import * as yup from "yup";

export const addressSchema = yup.object({
    cep: yup.string().required("CEP é um campo obrigatório."),
    street: yup.string().required("Rua é um campo obrigatório."),
    number: yup
        .number()
        .typeError("Número deve ser um valor numérico.")
        .required("Número é um campo obrigatório."),
    complement: yup.string().nullable(),
    neighborhood: yup.string().required("Bairro é um campo obrigatório."),
    city: yup.string().required("Cidade é um campo obrigatório."),
    state: yup.string().required("UF é um campo obrigatório."),
    paymentMethod: yup.string().required("Método de pagamento é obrigatório"),
}).required();

export type AddressSchema = yup.InferType<typeof addressSchema>;
