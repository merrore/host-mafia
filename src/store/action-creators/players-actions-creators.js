import { SET_PLAYER } from '../action-types';

const setPlayer = (response) => ({type: SET_PLAYER, payload: response});

export {
    setPlayer
}