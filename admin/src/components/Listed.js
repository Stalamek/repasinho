import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Switch } from 'react-router-dom';
import Show from './Show';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import Adding from './Adding';
import Edizao  from './Edizao'

const drawerWidth = 240;

const Listed = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Repasinho
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to='/puta'>
                        <AccessibleForwardIcon /><span style={{paddingLeft: '16px'}}>quetal</span>
                    </Link>
                    </div>
                </Drawer>
                <Switch>
                    <Route path='/puta'>
                        <Show />
                    </Route>
                    <Route path='/adding'>
                        <Adding />
                    </Route>
                    <Route path={`/:id`}>
                        <Edizao />
                    </Route>
                </Switch>
            </Box>
        </div>
    );
};

export default Listed;
