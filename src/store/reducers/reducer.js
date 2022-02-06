import { combineReducers } from 'redux';

import { playersRoles } from './playersRoles-reducer';
import { playersReducer } from './players-reducer';
import { gameReducer } from './game-reducer';

export const reducer = combineReducers({
    playersRoles,
    playersReducer,
    gameReducer
});