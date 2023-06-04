import * as yup from "yup";
import { Messages } from "./errorMessages";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(Messages.Email.required),
  password: yup.string().required(Messages.Password.required),
});

const SignupSchema = yup.object().shape({
  email: yup.string().email().required(Messages.Email.required),
  password: yup.string().required(Messages.Password.required),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required('Confirm Password is required'),
});

const SearchSchema = yup.object().shape({
  Search: yup.string().required(Messages.Search.required),
});

const NewPostSchema = yup.object().shape({
  title: yup.string().required(Messages.title.required),
  description: yup.string().required(Messages.description.required),
});

const EditProfilePreviewUserSchema = yup.object().shape({
  name: yup.string().required(Messages.Name.required),
  bio: yup.string().required(Messages.Bio.required),
  location: yup.string().required(Messages.Location.required),
  porfolio: yup.string(),
  github: yup.string().required(Messages.Github.required),
});

export {
  LoginSchema,
  SearchSchema,
  NewPostSchema,
  EditProfilePreviewUserSchema,
  SignupSchema,
};
