// React imports
import * as React from 'react';
import { useNavigate } from "react-router-dom";

// Material UI import
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icon imports
import SettingsIcon from '@mui/icons-material/Settings';

export default function SecondaryListItems() {
    const navigate = useNavigate()

    function navigateTo(url) {
        navigate(url);
    }

    return (
        <React.Fragment>
            <ListItemButton onClick={event => navigateTo("/settings")}>
                <ListItemIcon>
                <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </React.Fragment>
    )
}