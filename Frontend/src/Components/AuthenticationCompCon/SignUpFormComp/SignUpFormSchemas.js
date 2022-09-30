import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numerci digit

export const signUpSchema = yup.object().shape({
  username: yup.string().min(6).max(30).required("Required"),
  email: yup.string().email("please enter a valid email").required("Requried"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "please create a stronger password" })
    .required("Required"),
  birthday: yup
    .date()
    .typeError("please enter a valid date")
    .min("1969-11-13", "Date is too early")
    .max(new Date(), "Date can't be on or after today")
    .required("Requried"),
});
