import * as yup from "yup";

export const pokemonSchema = yup.object().shape({
  name: yup.string().required("Pokemon name is required"),
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be greater than 0")
    .integer("Quantity must be an integer")
    .required("Quantity is required")
    .min(1)
    .max(999)
});