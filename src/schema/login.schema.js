import * as yup from "yup";

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Minimun 6 character needed.")
    .max(20, "Maximun 20 character are allowed."),
  username: yup
    .string()
    .required("Username is required.")
    .min(10, "Minimun 10 character needed.")
    .max(50, "Maximun 50 character needed."),
});
