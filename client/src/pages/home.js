// React related imports
import React, { useEffect } from 'react';

// Design related imports
import logo from "../logo.png";

// MUI related imports
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
            SwiftSync
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const signInTheme = createTheme({
    palette: {
        primary: {
            main: "#26a69a",
            light: "#51b7ae",
            dark: "#1a746b",
            contrastText: "#fff",
        },
        secondary: {
            main: '#00897b',
            light: "#33a095",
            dark: "#005f56",
            contrastText: "#fff",
        },
    },
});

export default function SignIn() {
    useEffect(() => {
        document.title = "SwiftSync";  
    }, []);

    return (
    <ThemeProvider theme={signInTheme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ 
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <img src={logo} style={{ width: "400px"}} alt="SwiftSync Logo"/>
            <Typography variant='h2' sx={{mt: 3}}>
                Home
            </Typography>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
    );
}