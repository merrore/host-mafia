import { SET_GAME_END } from "../action-types";

const initialState = {
    isGameEnd: false
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_END: {
            return {
                ...state,
                isGameEnd: true
            }
        }
 
		default: return state;
	}
}