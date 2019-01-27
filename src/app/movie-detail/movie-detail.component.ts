import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieDataService } from '../movie-data/movie-data.service';
import { movies } from '../movie-data/movie.mock-data';
import { Movie } from '../movie-data/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieDataService: MovieDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieDataService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

}
