import React from 'react';
import {Card, CardActions, CarMedia, Button, CardMedia, Typography} from '@material-ui/core';


const Player = ({player}) => {
    return(
        <Card>
            <CardMedia>
                <div>
                    <Typography>{player.accountName}</Typography>
                </div>
                <div>
                    <Typography>Kills: {player.kills}</Typography>
                </div>
                <div>
                    <Typography>Deaths: {player.deaths}</Typography>
                </div>
                <div>
                    <Typography>Assists: {player.asists}</Typography>
                </div>
            </CardMedia>
        </Card>
    );
}

export default Player;