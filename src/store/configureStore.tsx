import {applyMiddleware, createStore} from 'redux';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import RootReducer from "../reducers/index";
import {StoreState} from "./store-state";

function configureStore(initialState: StoreState){
    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}

export default configureStore;