import * as Yup from 'yup';

const loginShema = Yup.object().shape({
  username: Yup.string().required('Username is required !'),
  password: Yup.string()
    .min(5, 'Must be longer than 5 characters')
    .required('Password is required !'),
});

export {loginShema};
