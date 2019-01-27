import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MovieDataService } from '../movie-data/movie-data.service';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Movie } from '../movie-data/movie';
import { GenreType } from '../movie-data/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit, AfterViewInit {

  movies$: Movie[];

  @ViewChild('searchInput') input: ElementRef;

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit() {
    this.getMovies();
  }

  ngAfterViewInit(): void {
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
  }

}
