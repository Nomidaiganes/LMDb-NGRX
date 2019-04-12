import { Action } from '@ngrx/store';
import { Movie } from '../movie-data/movie';

export enum ActionTypes {
    LoadMovies = '[Movie List Page] LoadMovies',
    GetMovies = '[Movie Service] GetMovies'
}

export class GetMovies implements Action {
    readonly type = ActionTypes.GetMovies;
    payload: Movie[];
}

export class LoadMovies implements Action {
    readonly type = ActionTypes.LoadMovies;
}

export type Union = GetMovies | LoadMovies;