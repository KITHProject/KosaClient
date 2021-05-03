import axios from 'axios';

const url = "http://localhost:5000/players";

export const fetchPlayers = () => axios.get(url);
export const createPlayer = (newPlayer) => axios.post(url, newPlayer);