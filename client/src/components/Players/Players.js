import React from 'react';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';
import Player from './Player/Player';


const Players = () => {
    
    const players = useSelector((state) => state.players);

    console.log(players)
    
    return(
        players.lenght ? <CircularProgress/> : (
            <Grid container spacing={5}>
                {
                    players.map((player)=>(
                        <Grid key={player._id} item xs={12} sm={12} >
                            <Player player={player}/>
                        </Grid>
                    ))
                }

            </Grid>
        )        
    );
}

export default Players;