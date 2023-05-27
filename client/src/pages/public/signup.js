// React related imports
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Design related imports
import logo from "../../logo_black.png";

// MUI related imports
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Component imports
import Copyright from '../../components/public/copyright';

const signUpTheme = createTheme({
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

export default function SignUp() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    function navigateToHome() {
        navigate("/");
    }

    useEffect(() => {
        document.title = "SwiftSync | Sign Up";  
    }, []);

    return (
        <ThemeProvider theme={signUpTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <img src={logo} style={{ width: "400px"}} alt="SwiftSync Logo" onClick={navigateToHome}/>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign Up
                </Button>
                <Grid container>
                </Grid>
            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        </ThemeProvider>
    );
}