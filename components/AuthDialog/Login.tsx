import React, { FC } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Divider, TextField, Button } from '@material-ui/core';
import styles from './AuthDialog.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/schemas/Schema.validation';
import FormField from '../FormField/FormField';

interface LoginProps {
  openRegister: () => void;
  openMain: () => void;
}
interface IFormInputs {
  email: string;
  password: string;
}

const Login: FC<LoginProps> = ({ openRegister, openMain }) => {
  const form = useForm<IFormInputs>({
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: IFormInputs) => console.log(data);
  
  return (
    <div>
      <p className={styles.title}>
        <KeyboardBackspaceIcon onClick={openMain} />К автризации
      </p>
     <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
         <FormField name = 'email' label = 'Почта'/>
         <FormField name = 'password' label = 'Пароль'/>
          <Divider className="mt-30 mb-20" />
          <div className="d-flex justify-between">
            <Button type="submit" color="primary" variant="contained">
              Войти
            </Button>
            <Button onClick={openRegister} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
     </FormProvider>
    </div>
  );
};

export default Login;
