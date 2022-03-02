import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import deliveryReducer from "./delivery/reducer";
import deliveryDetailsReducer from "./details/reducer";

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
    delivery: deliveryReducer,
    deliveryDetails: deliveryDetailsReducer
});

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
 );

export type RootState = ReturnType<typeof rootReducer>;
export default store;