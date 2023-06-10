import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Component imports
import { mainListItems, secondaryListItems } from '../../components/private/sideBar/listItems';
import Chart from '../../components/private/dashboard/chart';
import Sales from '../../components/private/dashboard/sales';
import Orders from '../../components/private/dashboard/orders';
import AppBar from "../../components/private/header/header";
import Drawer from "../../components/private/sideBar/drawer";
import Copyright from '../../components/public/copyright';

// Design related import
import logoBlack from "../../logo_black.png"

// Material UI imports
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={dashboardTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                        pr: '24px', // Keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                        >
                        Dashboard
                        </Typography>
                        {/* Notification */}
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        {/* Account */}
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <AccountCircleIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <img src={logoBlack} style={{ width: "160px" }} alt="SwiftSync Logo"/>
                        <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
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
                        <Typography>Orders</Typography>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}