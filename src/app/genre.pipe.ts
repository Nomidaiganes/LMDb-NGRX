import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genres: string[]): string {
    let genresUpper = [];
    genres.forEach(genre => genresUpper.push(genre.toUpperCase()));
    return genresUpper.join(' / ');
  }

}
