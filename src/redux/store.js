import { combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import genreReducer from "./reducers/genreReducer";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer =combineReducers({
    movie: movieReducer,
    genre: genreReducer
})
export default createStore(rootReducer,applyMiddleware(thunk))

 