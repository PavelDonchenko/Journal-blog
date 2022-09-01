import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { FC } from 'react';
import styles from './AuthDialog.module.scss';
import Login from './Login';
import Main from './MainAuth'
import Register from './Register';

type Props = {
  onClose: () => void;
  visible: boolean;
};

const AuthDialog: FC<Props> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');

  React.useEffect(() => {
    return () => {
      setFormType('main');
      console.log('close component');
    };
  }, [visible]);

  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="responsive-dialog-title" fullWidth maxWidth="xs">
      <DialogContent>
        <DialogContentText>
          
          {formType === 'main' && (
           <Main setFormType = {() => setFormType('login')} />
          )}
          {formType === 'login' && (
            <Login openRegister = {() => setFormType('register')} openMain = {() => setFormType('main')} />
          )}
           {formType === 'register' && (
            <Register setFormType = {() => setFormType('main')} />
          )}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
