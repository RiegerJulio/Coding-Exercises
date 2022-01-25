import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
// import { composeWithDevTools } from 'redux-devtools';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;