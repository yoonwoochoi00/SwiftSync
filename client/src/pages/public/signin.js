// React related imports
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Design related imports
import logo from "../../logo_black.png";

// MUI related imports
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Component imports
import Copyright from '../../components/public/copyright';

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

export default function SignIn(props) {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    axios({
      method: "POST",
      url: "/signIn",
      data: {
        emailAddress: signInForm.email,
        password: signInForm.password,
      }
    }).then((response) => {
      props.setToken(response.data.access_token)
      navigate("/dashboard");
    }).catch((error) => {
      if (error.response) {
        alert("Incorrect username or password.");
      }
    })

    setSignInForm(({
      emailAddress: "",
      password: ""
    }))

    event.preventDefault();
  };

  function handleSignInFormChange(event) {
    const {value, name} = event.target;
    setSignInForm(prevNote => ({
      ...prevNote, [name]: value
    }));
  }

  function navigateToHome() {
    navigate("/");
}

  useEffect(() => {
    document.title = "SwiftSync | Sign In";
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
              onChange={handleSignInFormChange}
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
              onChange={handleSignInFormChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Reset Password
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}