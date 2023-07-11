import React from 'react';
import { isLoggedIn } from '../../helpers/authHelper';
import { Typography } from '@mui/material';

const NoLoginView = () => {
    return(
        <Typography variant="h2"> You are not logged In!</Typography>
    )
}

export default NoLoginView;