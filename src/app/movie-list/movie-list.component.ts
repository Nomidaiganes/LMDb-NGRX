import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MovieDataService } from '../movie-data/movie-data.service';
import { Store, select } from '@ngrx/store';
import { fromEvent, of, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Movie } from '../movie-data/movie';
import { GenreType, genreType } from '../movie-data/movie.model';
import * as MovieActions from '../actions/movie-list.actions';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit /* AfterViewInit */ {

  /* movies$: Observable<Movie[]> = this.store.select(movies => movies); */
  movies: Movie[];

  genres = Object.keys(genreType);

  @ViewChild('searchInput') input: ElementRef;

  constructor(private movieDataService: MovieDataService,
              private store: Store<Movie[]>) { }

  ngOnInit() {
    this.store.dispatch(new MovieActions.LoadMovies);
    // this.movies$ = this.store.select(movies => movies);
    this.store.pipe(select((state) => state)).subscribe((movies) => {
      this.movies = movies;
   });
    console.log('movie: ' + JSON.stringify(this.movies));
  }

  /* ngAfterViewInit(): void {
    fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(200),
        distinctUntilChanged(),
        tap(searchTerm => this.movieDataService.getMovies(searchTerm).subscribe(movies => this.movies$ = movies))
      )
      .subscribe();
  }

  getMovies() {
    this.movieDataService.getMovies('').subscribe(movies => this.movies$ = movies);
  }

  filterMovies(genre: GenreType) {
    this.movies$ = this.movies$.filter(movie => movie.genres.includes(genre))
  } */

}
