import * as yup from 'yup';
import { registerMessages } from '../../../utils/Messages/register-messages';

const { email, password } = registerMessages;

const registerSchema = yup.object().shape({
  email: yup.string().email(email.notValid).required(email.required),
  password: yup
    .string()
    .min(8, password.notMin)
    .matches(/[a-z]/, password.notLower)
    .matches(/[A-Z]/, password.notUpper)
    .matches(/[0-9]/, password.notNumber)
    .matches(/[^a-zA-Z0-9\s]/, password.notSpecialChar)
    .required(password.required),
  confirmPassword: yup.string(),
});

export default registerSchema;
