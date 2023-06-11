import * as yup from "yup";
import { Messages } from "./errorMessages";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(Messages.Email.required),
  password: yup.string().required(Messages.Password.required),
});

const SignupSchema = yup.object().shape({
  username: yup.string().required(Messages.Username.required),
  email: yup.string().email().required(Messages.Email.required),
  password: yup.string().required(Messages.Password.required),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords do not match")
    .required("Confirm Password is required"),
});

const SearchSchema = yup.object().shape({
  Search: yup.string().required(Messages.Search.required),
});

const NewPostSchema = yup.object().shape({
  title: yup.string().required(Messages.title.required),
  description: yup.string().required(Messages.description.required),
  tags: yup.array().required(Messages.Tags.required),
  postImage: yup
    .mixed()
    .test("required", "You need to provide a file", (file) => {
      if (file) return true;
      return false;
    }),
});

const EditProfilePreviewUserSchema = yup.object().shape({
  name: yup.string().required(Messages.Name.required),
  bio: yup.string().required(Messages.Bio.required),
  location: yup.string().required(Messages.Location.required),
  porfolio: yup.string(),
  github: yup.string().required(Messages.Github.required),
});

export {
  EditProfilePreviewUserSchema,
  LoginSchema,
  NewPostSchema,
  SearchSchema,
  SignupSchema,
};
