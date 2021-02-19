import React from 'react';
import WelcomeView from './../components/WelcomeView';
import Grid from '@material-ui/core/Grid';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const WelcomePage = props => {
    return (
        <WelcomeView>
            <Grid container
                justify="center"
                direction="column"
                className="full">
                <div className="highlight">
                    <Grid item container xs={12}
                        justify="center"
                        alignItems="center">
                            <Grid item>
                                <IconContext.Provider value={{size: "6em"}}>
                                    <WiDaySunny/>
                                </IconContext.Provider>
                            </Grid>
                            <Grid item
                                container
                                direction="column"
                                justify="center"
                                alignItems="center">
                                <Typography variant="h4" color="inherit">
                                    Weather App
                                </Typography>
                                <Link color="inherit"
                                    aria-label="menu"
                                    component={RouterLink}
                                    to="/main">
                                    Get in
                                </Link>
                            </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeView>
    );
}

export default WelcomePage;
