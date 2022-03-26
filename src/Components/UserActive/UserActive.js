import React from 'react';
import Paper from '@mui/material/Paper';

const UserActive = ({isActive}) => {
    return (
        <Paper
        sx={{
            backgroundColor: `${isActive ? 'rgba(84, 214, 44, 0.16)' : 'rgba(255, 72, 66, 0.16)'}`,
            color: `${isActive ? 'rgb(34, 154, 22)' : 'rgb(183, 33, 54)'}`,
            padding: '0 8px',
            boxShadow: 'none',
            width: 'fit-content',
            marginLeft: 'auto'
        }}
        >
            {isActive? 'Active' : 'Banned'}
        </Paper>
    );
};

export default UserActive;
