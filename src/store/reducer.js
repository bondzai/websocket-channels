import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const initialEndpoint = {
    endpoint: null,
    socket: null,
    messages: [],
    isConnected: false,
    isConnecting: false,
};

const endpointReducer = (state = initialEndpoint, action) => {
    switch (action.type) {
        case actionTypes.SET_ENDPOINT:
            return { ...state, endpoint: action.payload };
        case actionTypes.SET_SOCKET:
            return { ...state, socket: action.payload };
        case actionTypes.ADD_MESSAGE:
            return { ...state, messages: [action.payload, ...state.messages] };
        case actionTypes.SET_CONNECTED:
            return { ...state, isConnected: action.payload };
        case actionTypes.SET_CONNECTING:
            return { ...state, isConnecting: action.payload };
        case actionTypes.CLEAR_MESSAGES:
            return { ...state, messages: [] };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    endpoint: endpointReducer,
});

export default rootReducer;
