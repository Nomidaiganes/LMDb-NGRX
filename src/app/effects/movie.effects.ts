import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { MovieDataService } from '../movie-data/movie-data.service';
import { Store, union } from '@ngrx/store';
import { Movie } from '../movie-data/movie';
import * as MovieActions from '../actions/movie-list.actions';

@Injectable()
export class MovieEffects {

    @Effect()
    getMovies$ = this.actions$
        .pipe(
            ofType(MovieActions.ActionTypes.LoadMovies),
            mergeMap(() => this.movieDataService.getMovies('')
                .pipe(
                    map(movies => ({ type: MovieActions.ActionTypes.GetMovies, payload: movies })),
                    catchError(() => EMPTY)
                ))
        )


    constructor(
        private movieDataService: MovieDataService,
        private actions$: Actions
    ) { }
}