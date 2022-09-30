import * as yup from "yup";

export const dateModelSchema = yup.object().shape({
  birthday: yup
    .date()
    .typeError("please enter a valid date")
    .min("1969-11-13", "Date is too early")
    .max(new Date(), "Date can't be on or after today")
    .required("Requried"),
});
