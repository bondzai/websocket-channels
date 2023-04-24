// data/actions.js
export const actionTypes = {
    SET_ENDPOINT: 'SET_ENDPOINT',
    SET_SOCKET: 'SET_SOCKET',
    ADD_MESSAGE: 'ADD_MESSAGE',
    SET_CONNECTED: 'SET_CONNECTED',
    SET_CONNECTING: 'SET_CONNECTING',
    CLEAR_MESSAGES: 'CLEAR_MESSAGES',
};

export const setEndpoint = (endpoint) => ({
    type: actionTypes.SET_ENDPOINT,
    payload: endpoint,
});

export const setSocket = (socket) => ({
    type: actionTypes.SET_SOCKET,
    payload: socket,
});

export const addMessage = (message) => ({
    type: actionTypes.ADD_MESSAGE,
    payload: message,
});

export const setConnected = (connected) => ({
    type: actionTypes.SET_CONNECTED,
    payload: connected,
});

export const setConnecting = (connecting) => ({
    type: actionTypes.SET_CONNECTING,
    payload: connecting,
});

export const clearMessages = () => ({
    type: actionTypes.CLEAR_MESSAGES,
});
