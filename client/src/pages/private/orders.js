import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Component imports
import Chart from '../../components/private/dashboard/chart';
import Sales from '../../components/private/dashboard/sales';
import Orders from '../../components/private/dashboard/orders';
import Copyright from '../../components/public/copyright';
import PrivateLayout from '../../components/private/privateLayout/privateLayout';

// Material UI imports
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const dashboardTheme = createTheme({
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

export default function Dashboard() {
    useEffect(() => {
        document.title = "SwiftSync | Orders";
    }, []);

    return (
        <ThemeProvider theme={dashboardTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <PrivateLayout pageName="Orders" />
                <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
                >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                            >
                                <Chart />
                            </Paper>
                        </Grid>

                        {/* Recent sales */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                            >
                                <Sales />
                            </Paper>
                        </Grid>

                        {/* Recent orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Orders />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}