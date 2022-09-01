import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface IFormFieldProps {
  name: string;
  label: string;
}

const FormField: FC<IFormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      {...register(name)}
      className="mb-20"
      name={name}
      size="small"
      label={label}
      variant="outlined"
      fullWidth
      helperText={formState.errors[name]?.message}
      error={!!formState.errors[name]?.message}
    />
  );
};

export default FormField;
