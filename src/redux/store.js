import {applyMiddleware,createStore,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);
export default store;