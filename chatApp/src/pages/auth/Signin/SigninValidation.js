import * as yup from 'yup';

const SigninValidation = yup.object().shape({
  email: yup.string().email('Ivalid email !').required('Email is required !'),
  password: yup
    .string()
    .min(6, 'Must be at least 6 characters !')
    .required('Password is required !'),
});

export default SigninValidation;
