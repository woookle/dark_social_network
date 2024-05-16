import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "The minimum length is 2 characters")
    .max(20, "The maximum length is 20 characters ")
    .required("email is none"),
  password: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .required("password is none"),
});

export default loginFormSchema;
