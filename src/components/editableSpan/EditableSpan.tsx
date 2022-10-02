import React, { ChangeEvent, useState } from 'react';

import { TextField } from '@mui/material';

import classes from './EditableSpan.module.css';

import edit from 'assets/img/edit.svg';
import { ReturnComponentType } from 'types';

export const EditableSpan = (): ReturnComponentType => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState('Username');

    const changeMode = (): void => {
        setEditMode(!editMode);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value);
    };

    return (
        <div className={classes.wrapper}>
            {editMode ? (
                <TextField
                    autoFocus
                    fullWidth
                    label="Nickname"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <button
                                type="button"
                                className={classes.button}
                                onClick={changeMode}
                            >
                                SAVE
                            </button>
                        ),
                    }}
                />
            ) : (
                <>
                    <span className={classes.title}>{value}</span>
                    <button type="button" className={classes.image} onClick={changeMode}>
                        <img src={edit} alt="edit" />
                    </button>
                </>
            )}
        </div>
    );
};
