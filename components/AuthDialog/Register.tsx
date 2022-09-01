import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Divider, TextField, Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './AuthDialog.module.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { registerSchema } from '../../utils/schemas/Schema.validation';
import FormField from '../FormField/FormField';

interface IRegisterProps {
  setFormType: () => void;
}
interface IFormInputs {
  email: string;
  password: string;
}

const Register = ({ setFormType }) => {
  const form = useForm<IFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div>
      <p className={styles.title}>
        <KeyboardBackspaceIcon onClick={setFormType} />
        Назад
      </p>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
        <FormField name="name" label="Имя" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
          <Divider className="mt-30 mb-20" />
          <div className="d-flex justify-between">
            <Button type="submit" color="primary" variant="contained">
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Register;
