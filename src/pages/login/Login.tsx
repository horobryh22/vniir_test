import React from 'react';

import { FormControl, FormGroup, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import classes from './Login.module.css';

import { StyledButton } from 'components';
import { EMAIL_RULES, PASSWORD_RULES } from 'constant';
import { useAppDispatch, useAppSelector, useVisibility } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { login } from 'store/thunks';
import { FormValues, ReturnComponentType } from 'types';
import { setValueToLocalStorage } from 'utils';

export const Login = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isUserAuth = useAppSelector(selectIsUserAuth);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            email: 'testuser@mail.com',
            password: 'testpassword',
        },
        mode: 'onChange',
    });

    const [visible, visibility] = useVisibility(false);

    const onSubmit = async (data: FormValues): Promise<void> => {
        const { payload } = await dispatch(login(data));

        if (payload) {
            setValueToLocalStorage(payload);
        }
    };

    if (isUserAuth) return <Navigate to={'/profile'} />;

    return (
        <div className={classes.formWrapper}>
            <h1 className={classes.title}>Sign In</h1>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth>
                    <FormGroup>
                        <Controller
                            name="email"
                            control={control}
                            rules={EMAIL_RULES}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="standard"
                                    label="Username"
                                    margin="normal"
                                    color={`${errors.email ? 'error' : 'primary'}`}
                                />
                            )}
                        />
                        <div className={classes.error}>{errors.email?.message}</div>
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
