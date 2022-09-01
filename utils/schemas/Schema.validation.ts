import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().email('Не верная почта').required('Почта обязательна'),
    password: yup.string().min(6, 'min six letters').required('Пароль обязателен'),
  })
  .required();

export const registerSchema = yup
  .object({
    name: yup.string().min(6, 'min six letters').required('Имя обязательно'),
  })
  .concat(loginSchema)
  .required();
