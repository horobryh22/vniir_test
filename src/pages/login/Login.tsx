import React from 'react';

import { FormControl, FormGroup, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import classes from './Login.module.css';

import { StyledButton } from 'components';
import { PASSWORD_RULES } from 'constant';
import { useVisibility } from 'hooks';
import { FormValues, ReturnComponentType } from 'types';

export const Login = (): ReturnComponentType => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            username: '',
            password: '',
        },
        mode: 'onChange',
    });

    const [visible, visibility] = useVisibility(false);

    const onSubmit = async (values: FormValues): Promise<void> => {
        console.log(values);
    };

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Sign In</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Username"
                                    margin="normal"
                                    color={`${errors.username ? 'error' : 'primary'}`}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.username?.message}</div>
                        <Controller
                            name="password"
                            control={control}
                            rules={PASSWORD_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Password"
                                    margin="normal"
                                    type={`${visibility ? 'text' : 'password'}`}
                                    InputProps={{
                                        endAdornment: visible,
                                    }}
                                    color={`${errors.password ? 'error' : 'primary'}`}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.password?.message}</div>
                    </FormGroup>
                    <StyledButton
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </StyledButton>
                </FormControl>
            </form>
        </div>
    );
};
