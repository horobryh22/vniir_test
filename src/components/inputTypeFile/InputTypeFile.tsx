import React from 'react';

import { InputTypeFileType } from './types';

import { ReturnComponentType } from 'types';

export const InputTypeFile = ({
    children,
    id,
}: InputTypeFileType): ReturnComponentType => {
    return (
        <label htmlFor={id}>
            <input type="file" style={{ display: 'none' }} id={id} />
            {children}
        </label>
    );
};
