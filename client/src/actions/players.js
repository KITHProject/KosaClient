import * as api from '../api/index.js';

export const getPlayers = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPlayers();

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }
    
    
};


export const createPlayer = (player) => async (dispatch) => {
    try {
        const {data} = await api.createPlayer(player);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
    
    
};