import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numerci digit

export const loginSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Requried"),
  password: yup
    .string()
    .min(8)
    // .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  save_login: yup.boolean(),
});
