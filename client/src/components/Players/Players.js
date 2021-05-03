import React from 'react';
import {useSelector} from 'react-redux';
import Player from './Player/Player'

const Players = () => {
    
    const players = useSelector((state) => state.players);

    console.log(players)
    
    return(
        <>
            <h1>Players</h1>
            <Player/>
            <Player/>
        </>
    );
}

export default Players;