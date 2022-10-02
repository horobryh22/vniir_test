import React from 'react';

import { Avatar } from '@mui/material';

import { UserAvatarType } from './types';

import defaultAvatar from 'assets/img/defaultAvatar.svg';
import { ReturnComponentType } from 'types';

export const UserAvatar = ({ width, height }: UserAvatarType): ReturnComponentType => {
    return <Avatar alt="avatar" src={defaultAvatar} sx={{ width, height }} />;
};
