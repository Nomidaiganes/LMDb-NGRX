import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { movies } from './movie.mock-data';
import { Movie } from './movie';
import { GenreType } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  moviesData = movies;

  constructor() { }

  getMovies(searchtext: string): Observable<Movie[]> {
    return of(this.moviesData.filter(movie => movie.name.toLowerCase().includes(searchtext.toLowerCase())));
  }

  getMoviesByGenre(genre: GenreType): Observable<Movie[]> {
    return of(this.moviesData.filter(movie => movie.genres.includes(genre)));
  }

  getMovie(id: number): Observable<Movie> {
    return of(this.moviesData.find(movie => movie.id === id));
  }

}
