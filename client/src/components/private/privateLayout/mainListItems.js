// React imports
import * as React from 'react';
import { useNavigate } from "react-router-dom";

// Material UI import
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icon imports
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';

export default function MainListItems() {
    const navigate = useNavigate()

    function navigateTo(url) {
        navigate(url);
    }

    return (
        <React.Fragment>
            <ListItemButton onClick={event => navigateTo("/dashboard")}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton onClick={event => navigateTo("/orders")}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItemButton>

            <ListItemButton onClick={event => navigateTo("/products")}>
                <ListItemIcon>
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
            </ListItemButton>

            <ListItemButton onClick={event => navigateTo("/integrations")}>
                <ListItemIcon>
                    <DataSaverOffIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItemButton>
        </React.Fragment>
    )
}
