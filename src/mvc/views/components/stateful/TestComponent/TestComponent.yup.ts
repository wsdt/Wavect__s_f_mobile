import * as Yup from "yup"

/** YUP is a validation scheme for forms/formik. */
const validationYupSchema = Yup.object().shape({
    email: Yup.string()
        .required("Mail required")
        .email("Mail not valid"), // you can also provide here everywhere a custom msg
    password: Yup.string().required("Password required"),
})

export default validationYupSchema
