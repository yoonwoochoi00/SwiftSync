// React related imports
import React from 'react';

// Component imports
import AppBar from "./appBar";
import Drawer from "./drawer";
import MainListItems from './mainListItems';
import SecondaryListItems from './secondaryListItems'

// Material UI imports
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// Design related import
import logoBlack from "../../../logo_black.png"

export default function PrivateLayout(props) {
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div style={{ height: '100vh' }}>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ pr: '24px' }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '80px',
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
                            { props.pageName }
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
                <List component="nav" position="fixed" sx={{marginBottom: '73vh'}}>
                    <MainListItems />
                    <Divider sx={{ my: 1 }} />
                    <SecondaryListItems />
                </List>
            </Drawer>
        </div>
    )
}
