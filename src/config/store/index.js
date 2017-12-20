import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'modules';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import AsansData from 'Data/asansData.json';

let store = createStore(
    rootReducer,
    AsansData,
    applyMiddleware(
        reduxThunk,
        reduxLogger
    )
);

export default store;