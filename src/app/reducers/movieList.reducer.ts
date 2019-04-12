import * as MovieActions from '../actions/movie-list.actions';
import { Movie } from '../movie-data/movie';
import { createSelector } from '@ngrx/store';

export interface State {
    movies: Movie[];
}

export const initialState: State = {
    movies: []
};

export function reducer(state = initialState, action: MovieActions.Union): State {
    switch(action.type) {
        case MovieActions.ActionTypes.GetMovies: {
            return {
                ...state,
                movies: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const selectMoviesList = (state: State) => state.movies;
export const getMoviesList = createSelector(selectMoviesList);