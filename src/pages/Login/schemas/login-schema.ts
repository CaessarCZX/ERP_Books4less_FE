import * as yup from 'yup';

const LoginSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Must type an email'),
  password: yup
    .string()
    .min(8, 'The password must have at least 8 chars')
    .required('Muast type a password'),
});

export default LoginSchema;
