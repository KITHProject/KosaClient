import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPlayers} from './actions/players';
import Players from './components/Players/Players';
import Form from './components/Form/Form';



const App = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPlayers());
    }, [dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Kosowe 3v3</Typography>
            </AppBar> 
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignitems="strech" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Players/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;