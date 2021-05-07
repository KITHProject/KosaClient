import React, {useState} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { createPlayer } from '../../actions/players';


const Form = () => {

    const [playerData, setPlayerData] = useState({
        accountName: '',
        kills:'',
        deaths:'',
        asists:'',
        points: '',
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPlayer(playerData));
    }

    return(
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Nowe dane
                </Typography>
                <TextField 
                    name="accountName" 
                    variant="outlined" 
                    label="AccountName" 
                    fullWidth 
                    value={playerData.accountName}
                    onChange={(e) => setPlayerData({ ...playerData, accountName: e.target.value })}
                />
                <TextField 
                    name="kills" 
                    variant="outlined" 
                    label="Kills" 
                    fullWidth 
                    value={playerData.kills}
                    onChange={(e) => setPlayerData({ ...playerData, kills: e.target.value })}
                />
                <TextField 
                    name="deaths" 
                    variant="outlined" 
                    label="Deaths" 
                    fullWidth 
                    value={playerData.deaths}
                    onChange={(e) => setPlayerData({ ...playerData, deaths: e.target.value })}
                />
                <TextField 
                    name="asists" 
                    variant="outlined" 
                    label="Asists" 
                    fullWidth 
                    value={playerData.asists}
                    onChange={(e) => setPlayerData({ ...playerData, asists: e.target.value })}
                />
                <Button varinat="container" color="primary" type="submit" fullWidth> Przycisk </Button>
            </form>
        </Paper>
    );
}

export default Form;