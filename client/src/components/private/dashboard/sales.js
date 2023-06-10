import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../title';

export default function Sales() {
    return (
        <React.Fragment>
            <Title>Recent Sales</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
        </React.Fragment>
    );
}