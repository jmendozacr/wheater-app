import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as LinkRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import { Typography } from '@material-ui/core';

const AppFrame = props => {
    return (
        <Grid container
            justify="centerx">
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link color="inherit"
                            component={LinkRouter}
                            to="/main"
                            aria-label="menu">
                            <IconContext.Provider value={{size: "2em"}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Wheater App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                APP
            </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {

}

export default AppFrame;
