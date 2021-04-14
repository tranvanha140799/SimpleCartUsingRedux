import * as MSG from './../constants/Messages';
import * as types from './../constants/ActionTypes';

var initialState = MSG.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;

        default: return state;
    }
};

export default message;