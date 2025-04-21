export const registerMessages = {
  email: {
    required: 'Email is required',
    notValid: 'Is not a valid email',
  },
  password: {
    required: 'Password ir required',
    invalidMin: 'The password must have at least 8 chars',
    notMin: 'The password must have at least 8 chars',
    notLower: 'Password must contain at least one lowercase letter',
    notUpper: 'Password must contain at least one uppercase letter',
    notNumber: 'Password must contain at least one number',
    notSpecialChar: 'Password must contain at least one special character',
  },
  passwordConfirmation: {
    required: 'Password confirmation is required',
    match: 'password must match',
  },
};
