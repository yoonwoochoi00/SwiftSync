// React related imports
import React, { useEffect } from 'react';

// Design related imports
import logo from "../../logo_black.png";

// MUI related imports
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

export default function PageNotFound() {
  useEffect(() => {
    document.title = "SwiftSync | Page Not Found";  
  }, []);

  return (
    <ThemeProvider theme={signInTheme}>
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
          <img src={logo} style={{ width: "400px"}} alt="SwiftSync Logo"/>
          <Typography variant="h4" align="center" sx={{mt: 1, mb: 2}}>
            Page not found
          </Typography>
          <Typography variant="h6" align="center">
            Something went wrong. Please try again.
          </Typography>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}