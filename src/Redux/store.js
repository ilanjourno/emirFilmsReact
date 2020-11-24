import { createStore, combineReducers } from 'redux';

import Movies from '../Services/Movies';

const globalState = {
    movies: Movies
};

function global (state = globalState, action) {
    let movies = state.movies;
    switch(action.type){
        case 'ADD_MOVIE':
            action.data.id = movies.length + 1;
            movies.push(action.data);
            return { ...state, movies: movies};
        case 'DELETE_MOVIE':
            movies.splice(action.index, 1);
            return { ...state, movies: movies};
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    global: global
}));

export default store;