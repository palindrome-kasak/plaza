import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./RootReducer";


const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}

export default store;
