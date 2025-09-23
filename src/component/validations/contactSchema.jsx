import * as yup from "yup";

export const contactSchema = yup.object().shape({
    name:yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    email:yup.string().email("Enter a valid email").required("Email is required"),
    textarea:yup.string().required("This field is required").min(10, "Message must be at least 10 characters")
  .max(300, "Message can't exceed 300 characters"),
});