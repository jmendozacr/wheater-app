import React from 'react';
import WelcomeView from './../components/WelcomeView';
import Grid from '@material-ui/core/Grid';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import Typography from '@material-ui/core/Typography';

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
                                    Wheater App
                                </Typography>
                            </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeView>
    );
}

export default WelcomePage;
