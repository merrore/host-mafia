import { SET_PLAYER } from "../action-types";

const initialState = {
    players: []
}

export const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER: {
            return {
                ...state,
                players: [...state.players, action.payload]
            }
        }

		default: return state;
	}
}