// React related imports
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Design related imports
import logo from "../../logo_black.png";

// MUI related imports
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Component imports
import Copyright from '../../components/public/copyright';

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
    const navigate = useNavigate()
    
    // Set document title
    useEffect(() => {
        document.title = "SwiftSync";  
    }, []);

    function navigateToSignIn() {
        navigate("/signin");
    }

    function navigateToSignUp() {
        navigate("/signup")
    }

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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3}}
                onClick={navigateToSignIn}
            >
                Sign In
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={navigateToSignUp}
            >
                Sign Up
            </Button>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
    );
}